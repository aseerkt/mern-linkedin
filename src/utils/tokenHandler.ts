import { Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import { COOKIE_NAME, __prod__ } from '../constants';
import { User } from '../entities/User';

export const setTokenCookie = (user: User, res: Response) =>
  res.cookie(
    COOKIE_NAME,
    sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' }),
    {
      maxAge: 7 * 24 * 60 * 60 * 100,
      httpOnly: true,
      secure: __prod__,
      sameSite: 'strict',
    }
  );

export const verifyToken = (token: string) =>
  verify(token, process.env.JWT_SECRET!);
