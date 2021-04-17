import {
  Arg,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from 'type-graphql';
import { User } from '../entities/User';
import { RegisterArgs, UserResponse } from '../types/UserTypes';
import { createFieldError } from '../utils/createFieldError';
import { getEntityErrors } from '../utils/getEntityErrors';
import { setTokenCookie } from '../utils/tokenHandler';
import { MyContext } from '../context';
import { isUser } from '../middlewares/isUser';
import { GRAVATAR_URL } from '../constants';

@Resolver(User)
export default class UserResolver {
  @FieldResolver()
  @UseMiddleware(isUser)
  email(@Root() user: User, @Ctx() { res }: MyContext) {
    if (user.id === res.locals.userId) return user.email;
    return '';
  }

  @FieldResolver()
  avatar(@Root() user: User) {
    if (user.avatar === '') return GRAVATAR_URL;
    return user.avatar;
  }

  @Query(() => User, { nullable: true })
  @UseMiddleware(isUser)
  me(@Ctx() { res, userLoader }: MyContext) {
    return userLoader.load(res.locals.userId);
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('registerArgs', () => RegisterArgs)
    { fullName, email, username, password }: RegisterArgs
  ): Promise<UserResponse> {
    // Check uniqueness of email & username
    const emailUser = await User.findOne({ email });
    if (emailUser)
      return {
        errors: [createFieldError('email', 'Email already used by another...')],
      };
    const usernameUser = await User.findOne({ username });
    if (usernameUser)
      return {
        errors: [createFieldError('username', 'Username is not available')],
      };

    const user = User.create({ fullName, email, username, password });
    const { errors } = await getEntityErrors(user);
    if (errors) return { errors };
    await user.save();
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { res }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: usernameOrEmail.includes('@')
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail },
    });
    if (!user)
      return {
        errors: [createFieldError('usernameOrEmail', 'User does not exist')],
      };
    if (!(await user.verifyPassword(password)))
      return { errors: [createFieldError('password', 'Incorrect Password')] };

    setTokenCookie(user, res);

    return { user };
  }
}
