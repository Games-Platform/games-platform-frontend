import { FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.scss';
import EyeClosed from '@/components/icons/EyeClosed';
import EyeOpened from '@/components/icons/EyeOpened';
import { Inputs } from '@/types/Types';
import ErrorMessage from '../error-message/ErrorMessage';

interface InputProps {
  type: string;
  name: string;
  label: string;
  className?: string;
  register: UseFormRegister<Inputs>;
  error: FieldErrors<Inputs>;
}

const Input: FC<InputProps> = ({
  type,
  name,
  register,
  error,
  label,
  className = '',
}) => {
  const [currentType, setCurrentType] = useState(type);

  const handleChangeType = useCallback(
    () =>
      currentType === 'password'
        ? setCurrentType('text')
        : setCurrentType('password'),
    [currentType],
  );

  const passwordIcon = useMemo(
    () => (currentType === 'password' ? <EyeClosed /> : <EyeOpened />),
    [currentType],
  );

  return (
    <div className={classNames(styles.wrapper, styles[className])}>
      <input
        type={currentType}
        {...register(name as 'email' | 'username' | 'password')}
        className={classNames(styles.input, {
          [styles.error]: error[name as 'email' | 'username' | 'password'],
        })}
        placeholder={label}
        name={name}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {type === 'password' && (
        <div
          className={classNames(styles.eye, styles[className])}
          onClick={handleChangeType}
          aria-hidden="true"
        >
          {passwordIcon}
        </div>
      )}
      {/* <ErrorMessage>
        {error[name as 'email' | 'username' | 'password']?.message}
      </ErrorMessage> */}
    </div>
  );
};

Input.defaultProps = {
  className: '',
};
export default Input;
