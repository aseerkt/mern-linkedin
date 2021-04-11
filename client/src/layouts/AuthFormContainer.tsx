import Logo from '../components/Logo';
import './AuthFormContainer.scss';

interface AuthFormContainerProps {
  subTitle: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  subTitle,
  children,
}) => {
  return (
    <div className='auth-form'>
      <Logo />
      <h1 className='auth-form__subtitle'>{subTitle}</h1>
      <section className='auth-form__body'>{children}</section>
    </div>
  );
};

export default AuthFormContainer;
