import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '@/components/button/Button';
import ErrorMessage from '@/components/errorMessage/ErrorMessage';
import Input from '@/components/input/Input';
import Google from '@/components/icons/Google';
import { Inputs } from '@/types/Types';
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from '@/store/services/auth';
import { loginSchema, registerSchema } from './schemas';

import styles from './Form.module.scss';

interface FormProps {
  children: string | JSX.Element | JSX.Element[];

  isRegister: boolean;
}

const Form: React.FC<FormProps> = ({ children, isRegister }) => {
  const backendLink = import.meta.env.VITE_BACKEND_LINK;

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  const [loginUser, { data: loggedUserData, error, isError, isSuccess }] =
    useLoginUserMutation();

  const [
    registerUser,
    {
      data: registerUserData,
      error: registerError,
      isError: registerIsError,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const onLogin: SubmitHandler<Inputs> = async (data) => {
    await loginUser(data);
  };

  const onRegister: SubmitHandler<Inputs> = async (data) => {
    await registerUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(loggedUserData?.message);
      navigate(from, { replace: true });
    }

    if (error) {
      if ('data' in error) {
        toast.error(error.data.message);
      }
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (registerIsSuccess) {
      toast.success(registerUserData?.message);
      navigate(from, { replace: true });
    }

    if (registerError) {
      if ('data' in registerError) {
        toast.error(registerError.data.message);
      }
    }
  }, [registerIsError, registerIsSuccess]);
  return (
    <form
      onSubmit={handleSubmit(isRegister ? onRegister : onLogin)}
      className={styles.form}
    >
      <Input
        type="text"
        name="email"
        label="Email"
        className="form-input"
        error={errors}
        register={register}
      />

      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      {isRegister && (
        <>
          <Input
            type="text"
            name="username"
            label="Username"
            className="form-input"
            error={errors}
            register={register}
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
        </>
      )}

      <Input
        type="password"
        name="password"
        label="Password"
        className="form-input"
        error={errors}
        register={register}
      />

      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <Button type="submit">{children}</Button>

      <div className={styles.or}>or</div>

      <a
        href={`${backendLink}/auth/google/callback`}
        className={styles.googleLink}
      >
        <Google />
        <span>Continue with Google</span>
      </a>

      {isRegister ? (
        <div className={styles['login-register-link']}>
          {' '}
          Already have an account? <Link to="/login">Log in!</Link>
        </div>
      ) : (
        <div className={styles['login-register-link']}>
          Don’t have an account yet? <Link to="/register">Register!</Link>
        </div>
      )}
    </form>
  );
};
export default Form;
