import { Request, Response } from 'express';
import { createUserLoader } from './dataloaders/userLoader';

export interface MyContext {
  req: Request;
  res: Response & { locals: { userId: string } };
  userLoader: ReturnType<typeof createUserLoader>;
}
