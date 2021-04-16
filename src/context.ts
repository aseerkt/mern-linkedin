import { Request, Response } from 'express';

export interface Context {
  req: Request;
  res: Response & { locals: { userId: string } };
}
