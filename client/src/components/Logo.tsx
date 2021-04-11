import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
  return (
    <Link className='logo' to='/'>
      <span className='sr-only'>LinkedIn</span>
      Linked<i className='fab fa-linkedin'></i>
    </Link>
  );
};

export default Logo;
