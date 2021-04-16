import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { User } from '../entities/User';
import { RegisterArgs, UserResponse } from '../types/UserTypes';
import { createFieldError } from '../utils/createFieldError';
import { getEntityErrors } from '../utils/getEntityErrors';

@Resolver()
export default class UserResolver {
  @Query(() => String)
  hello() {
    return 'Hi there';
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
}
