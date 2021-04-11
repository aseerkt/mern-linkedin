import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <>
      <nav className='nav' aria-label='Primary'>
        <Link className='nav__logo-link' to='/'>
          <span className='sr-only'>LinkedIn</span>
          Linked<i className='fab fa-linkedin'></i>
        </Link>
        <div className='nav__cta-container'>
          <Link className='nav__button-tertiary' to='/join'>
            Join now
          </Link>
          <Link className='nav__button-secondary' to='/login'>
            Sign in
          </Link>
        </div>
      </nav>
      <main>
        <section className='section section-hero'>
          <div className='hero'>
            <h1 className='hero__headline'>Welcome To LinkedIn Clone</h1>
            <p className='hero__desc'>Contribute to this project</p>
            <a rel='noreferrer' href='https://github.com/aseerkt/mern-linkedin'>
              <span className='sr-only'>github link to the source code</span>
              <i className='fab fa-github fa-2x'></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
