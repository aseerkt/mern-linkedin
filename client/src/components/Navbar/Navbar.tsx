import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useGetUser from '../../hooks/useGetUser';
import './Navbar.scss';

const Navbar = () => {
  const { user } = useGetUser();
  const history = useHistory();

  useEffect(() => {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach((tab) => {
      const tabLocation = tab.getAttribute('href');
      if (tabLocation?.includes(history.location.pathname))
        tab.classList.add('current-page');
      else tab.classList.remove('current-page');
    });
  }, []);

  const swapTab = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const navTabs = document.querySelectorAll<HTMLAnchorElement>('.nav-tab');
    navTabs.forEach((tab) => tab.classList.remove('current-page'));
    e.currentTarget.classList.add('current-page');
  };

  const removeTabHighlight = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const navTabs = document.querySelectorAll('.nav-tab');
    console.log(navTabs);
    navTabs.forEach((tab) => tab.classList.remove('current-page'));
  };

  return (
    <header className='navbar'>
      <div className='container navbar__section'>
        <div className='navbar__left'>
          {/* LOGO */}
          <Link className='navbar__logo' to='/'>
            <span className='sr-only' title='Linkedin'>
              Linkedin
            </span>
            <i className='fab fa-linkedin'></i>
          </Link>
          {/* SEARCH */}
          <div className='navbar__search'>
            <i className='fas fa-search navbar__search_Icon'></i>
            <input
              type='search'
              className='navbar__search_Input'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='navbar__right'>
          <nav className='navbar__nav'>
            <ul>
              <li>
                <Link className='nav-tab' onClick={swapTab} to='/feed'>
                  <i className='fas fa-home'></i>
                  <small>Home</small>
                </Link>
              </li>
              <li>
                <Link className='nav-tab' to='/mynetwork'>
                  <i className='fas fa-user-friends'></i>
                  <small>My Network</small>
                </Link>
              </li>
              <li>
                <Link className='nav-tab' onClick={swapTab} to='/jobs'>
                  <i className='fas fa-briefcase'></i>
                  <small>Jobs</small>
                </Link>
              </li>
              <li>
                <Link className='nav-tab' onClick={swapTab} to='/messaging'>
                  <i className='fas fa-comment-dots'></i>
                  <small>Messaging</small>
                </Link>
              </li>
              <li>
                <Link className='nav-tab' onClick={swapTab} to='/notifications'>
                  <i className='fas fa-bell'></i>
                  <small>Notifications</small>
                </Link>
              </li>
              <li>
                <Link
                  className='nav-tab'
                  onClick={removeTabHighlight}
                  to={`/in/${user?.username}`}
                >
                  {user ? (
                    <img
                      className='navbar__avatar'
                      src={user.avatar}
                      alt={`avatar image of ${user.fullName}`}
                    />
                  ) : (
                    <i className='fas fa-circle'></i>
                  )}
                  <small>
                    Me <i className='fas fa-caret-down'></i>
                  </small>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
