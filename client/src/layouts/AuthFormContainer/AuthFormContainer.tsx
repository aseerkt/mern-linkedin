import Logo from '../../components/Logo/Logo';
import './AuthFormContainer.scss';

interface AuthFormContainerProps {
  subTitle: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  subTitle,
  children,
}) => {
  return (
    <div className='auth-form-container'>
      <Logo />
      <h1 className='auth-form-container__subtitle'>{subTitle}</h1>
      <section className='auth-form-container__body'>{children}</section>
    </div>
  );
};

export default AuthFormContainer;
