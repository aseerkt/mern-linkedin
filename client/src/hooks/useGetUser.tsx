import { useMeQuery } from '../generated/graphql';

const useGetUser = () => {
  const [{ data, fetching }] = useMeQuery();
  if (!fetching && data && data.me) return { user: data.me };
  return { user: null };
};

export default useGetUser;
