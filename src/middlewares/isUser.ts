import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../context';
import { authUser } from '../utils/authUser';

export const isUser: MiddlewareFn<MyContext> = ({ context }, next) => {
  try {
    authUser(context);
  } catch (err) {
    console.log(err);
  }
  return next();
};
