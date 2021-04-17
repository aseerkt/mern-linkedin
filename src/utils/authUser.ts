import { COOKIE_NAME } from '../constants';
import { MyContext } from '../context';
import { verifyToken } from './tokenHandler';

export const authUser = (ctx: MyContext) => {
  const token = ctx.req.cookies[COOKIE_NAME];
  if (!token) {
    console.log('no token');
    throw Error('oops');
  }
  const { userId }: any = verifyToken(token);
  if (!userId) {
    console.log('no userId');
    throw Error('oops');
  }
  ctx.res.locals.userId = userId;
};
