import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useRegisterMutation } from '../../generated/graphql';
import AuthFormContainer from '../../layouts/AuthFormContainer/AuthFormContainer';
import { extractFieldErrors } from '../../utils/extractFieldErrors';
import './Auth.scss';

const Register = () => {
  const [, register] = useRegisterMutation();
  return (
    <AuthFormContainer subTitle='Make the most of your professional life'>
      <Formik
        initialValues={{ fullName: '', email: '', username: '', password: '' }}
        onSubmit={async (values, action) => {
          console.log(values);
          try {
            const res = await register({ registerArgs: values });
            console.log(res);
            if (res.data) {
              const { errors, user } = res.data.register;
              if (errors) {
                action.setErrors(extractFieldErrors(errors));
                return;
              }
              if (user) alert(JSON.stringify(user));
            }
          } catch (err) {}
        }}
      >
        {({ isSubmitting }) => (
          <Form className='auth-form'>
            <Input name='fullName' label='Full Name' />
            <Input name='email' label='Email' />
            <Input name='username' label='Username' />
            <Input type='password' name='password' label='Password' />
            <small className='auth-form__agreeText'>
              By clicking Agree &amp; Join, you agree to the LinkedIn{' '}
              <span>User Agreement</span>, <span>Privacy Policy</span> and
              <span> Cookie Policy</span>.
            </small>
            <Button block disabled={isSubmitting} type='submit'>
              Agree &amp; Join
            </Button>
          </Form>
        )}
      </Formik>
      <small className='auth-form__bottomText'>
        Already on LinkedIn? <Link to='/login'>Sign in</Link>
      </small>
    </AuthFormContainer>
  );
};

export default Register;
