import './Input.scss';
import { useField } from 'formik';

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
      <input className='input__input' id={field.name} {...field} {...props} />
      <small className='input__helperText'>{helperText}</small>
      <small className='input__errorText'>{touched && error}</small>
    </div>
  );
};

export default Input;
