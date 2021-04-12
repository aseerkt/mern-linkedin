import { Result, ValidationError } from 'express-validator';

export const extractErrors = (errors: Result<ValidationError>) => {
  return errors.array().map(({ msg, param }) => ({ msg, param }));
};
