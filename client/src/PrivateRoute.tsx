import { Route, RouteProps, useHistory } from 'react-router-dom';
import PageLoader from './components/PageLoader/PageLoader';
import { useMeQuery } from './generated/graphql';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const [{ data, fetching }] = useMeQuery();
  const history = useHistory();

  if (fetching) {
    return <PageLoader />;
  } else if (data && !data.me) {
    history.push('/');
    return null;
  }
  if (props.path === '/') history.push('/feed');
  return <Route {...props} />;
  // return <PageLoader />;
};

export default PrivateRoute;
