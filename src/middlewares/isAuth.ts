import { AuthenticationError } from 'apollo-server-express';
import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../context';
import { authUser } from '../utils/authUser';

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  try {
    authUser(context);
    return next();
  } catch (err) {
    console.log(err);
    throw new AuthenticationError('Not Authenticated');
  }
};
