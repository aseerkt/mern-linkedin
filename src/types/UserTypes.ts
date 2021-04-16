import { Field, InputType, ObjectType } from 'type-graphql';
import { User } from '../entities/User';
import { FieldError } from './GlobalTypes';

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}

@InputType()
export class RegisterArgs {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}

@InputType()
export class LoginArgs {
  @Field()
  usernameOrEmail: string;

  @Field()
  password: string;
}
