import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { extractErrors } from '../utils/extractErrors';

export const checkError = (req: Request, res: Response, next: NextFunction) => {
  let errors: any = validationResult(req);
  if (!errors.isEmpty()) {
    errors = extractErrors(errors);
    return res.status(400).json({ errors });
  }
  return next();
};
