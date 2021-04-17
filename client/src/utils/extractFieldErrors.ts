import { FieldError } from '../generated/graphql';

export const extractFieldErrors = (errors: FieldError[]) =>
  errors.reduce((prev, { path, msg }) => {
    prev[path] = msg;
    return prev;
  }, {} as Record<string, string>);
