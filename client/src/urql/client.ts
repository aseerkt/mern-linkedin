import { createClient } from 'urql';

export const urqlClient = createClient({
  url: 'http://localhost:5000/graphql',
  fetchOptions: {
    credentials: 'include',
  },
});
