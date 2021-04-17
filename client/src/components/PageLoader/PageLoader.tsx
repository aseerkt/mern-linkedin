import Logo from '../Logo/Logo';
import './PageLoader.scss';

const PageLoader = () => {
  return (
    <div className='pageLoader'>
      <div className='pageLoader__content'>
        <Logo />
        <div className='loader-bar'>
          <span className='loader'></span>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
