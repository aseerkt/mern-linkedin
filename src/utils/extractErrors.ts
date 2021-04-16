import { ValidationError } from 'class-validator';
import { FieldError } from '../types/GlobalTypes';

export const extractErrors = (errors: ValidationError[]): FieldError[] => {
  return errors.reduce((prev, { property, constraints }) => {
    prev.push({ path: property, msg: Object.values(constraints!)[0] });
    return prev;
  }, [] as FieldError[]);
};
