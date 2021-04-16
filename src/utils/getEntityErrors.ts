import { validate } from 'class-validator';
import { extractErrors } from './extractErrors';

export const getEntityErrors = async (object: Object) => {
  const validationErrors = await validate(object);
  if (validationErrors.length > 0) {
    return { errors: extractErrors(validationErrors) };
  }
  return { errors: null };
};
