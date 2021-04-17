import classnames from 'classnames';
import './Button.scss';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: 'primary' | 'secondary';
  block?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  block = false,
  ...props
}) => {
  return (
    <button
      className={classnames('button', {
        button__primary: variant === 'primary',
        button__secondary: variant === 'secondary',
        button__block: block,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
