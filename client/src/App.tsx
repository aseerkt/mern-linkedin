import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import PrivateRoute from './PrivateRoute';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NetworkPage from './pages/NetworkPage/NetworkPage';
import JobsPage from './pages/JobsPage/JobsPage';
import MessagingPage from './pages/MessagingPage/MessagingPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={HomePage} />
        <Route exact path='/join' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/in/:username' component={ProfilePage} />
        <PrivateRoute exact path='/feed' component={FeedPage} />
        <PrivateRoute exact path='/mynetwork' component={NetworkPage} />
        <PrivateRoute exact path='/jobs' component={JobsPage} />
        <PrivateRoute exact path='/messaging' component={MessagingPage} />
        <PrivateRoute
          exact
          path='/notifications'
          component={NotificationsPage}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
