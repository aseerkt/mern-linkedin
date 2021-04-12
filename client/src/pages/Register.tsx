import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import AuthFormContainer from '../layouts/AuthFormContainer';
import './Register.scss';

const Register = () => {
  return (
    <AuthFormContainer subTitle='Make the most of your professional life'>
      <Formik
        initialValues={{ fullName: '', email: '', username: '', password: '' }}
        onSubmit={(values, action) => {
          console.log(values);
          action.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='register-form'>
            <Input name='fullName' label='Full Name' />
            <Input name='email' label='Email' />
            <Input name='username' label='Username' />
            <Input type='password' name='password' label='Password' />
            <small className='register-form__agreeText'>
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
      <small className='register-form__bottomText'>
        Already on LinkedIn? <Link to='/login'>Sign in</Link>
      </small>
    </AuthFormContainer>
  );
};

export default Register;
