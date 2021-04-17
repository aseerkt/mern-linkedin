import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useLoginMutation } from '../../generated/graphql';
import AuthFormContainer from '../../layouts/AuthFormContainer/AuthFormContainer';
import { extractFieldErrors } from '../../utils/extractFieldErrors';
import './Auth.scss';

const Login = () => {
  const [, login] = useLoginMutation();
  return (
    <AuthFormContainer subTitle='Stay updated on your professional world'>
      <Formik
        initialValues={{ usernameOrEmail: '', password: '' }}
        onSubmit={async (values, action) => {
          try {
            const res = await login(values);
            if (res.data) {
              const { errors } = res.data.login;
              if (errors) action.setErrors(extractFieldErrors(errors));
            }
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({ values: { usernameOrEmail, password } }) => (
          <Form className='auth-form'>
            <Input name='usernameOrEmail' label='Username or Email' />
            <Input type='password' name='password' label='Password' />
            <Button
              disabled={!usernameOrEmail || !password}
              block
              variant='primary'
              type='submit'
            >
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
      <small className='auth-form__bottomText'>
        New to LinkedIn? <Link to='/join'>Join now</Link>
      </small>
    </AuthFormContainer>
  );
};

export default Login;
