import {InputHTMLAttributes} from 'react';

interface SignInFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  entityForm: string;
}

const SignInField = ({
  label,
  type = 'text',
  entityForm,
  ...otherProps
}: SignInFieldProps) => {
  const inputName = `${entityForm}-${type}`;

  return (
    <div className="sign-in__field">
      <input
        className="sign-in__input"
        type={type}
        placeholder={label}
        name={type}
        id={inputName}
        data-testid={label}
        {...otherProps}
      />
      <label
        className="sign-in__label visually-hidden"
        htmlFor={inputName}
      >
        {label}
      </label>
    </div>
  );
};

export default SignInField;
