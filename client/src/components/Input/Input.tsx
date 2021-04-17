import { useField } from 'formik';
import classNames from 'classnames';
import './Input.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  helperText?: string;
};

const Input: React.FC<InputProps> = ({ label, helperText, ...props }) => {
  const [field, { error, touched }] = useField(props);

  return (
    <div className='input__control'>
      <label className='input__label' htmlFor={field.name}>
        {label}
      </label>
      <input
        className={classNames('input__input', {
          'input__input--error': !!error,
        })}
        id={field.name}
        {...field}
        {...props}
      />
      {helperText && <small className='input__helperText'>{helperText}</small>}
      {touched && error && (
        <small className='input__errorText'>
          <i className='fas fa-exclamation-circle'></i> {error}
        </small>
      )}
    </div>
  );
};

export default Input;
