import Navbar from '../../components/Navbar/Navbar';
import './PageLayout.scss';

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='container pageLayout'>{children}</div>
    </>
  );
};

export default PageLayout;
