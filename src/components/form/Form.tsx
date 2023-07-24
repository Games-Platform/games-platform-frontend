import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Button from '../button/Button';
import ErrorMessage from '../error-message/ErrorMessage';
import Input from '../input/Input';
import { Inputs } from '@/types/Types';
import { useCheckUserQuery, useLoginUserMutation } from '@/store/services/auth';
import { loginSchema, registerSchema } from './schemas';
import styles from './Form.module.scss';
import Google from '../icons/Google';

interface FormProps {
  children: string | JSX.Element | JSX.Element[];

  isRegister: boolean;
}

const Form: React.FC<FormProps> = ({ children, isRegister }) => {
  const backendLink = import.meta.env.VITE_BACKEND_LINK;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  const [
    loginUser,
    { data: loggedUserData, error, isError, isLoading, isSuccess },
  ] = useLoginUserMutation();

  const { refetch } = useCheckUserQuery(null);

  const onLogin: SubmitHandler<Inputs> = async (data) => {
    await loginUser(data);
  };

  const onRegister = async () => {
    console.log(1);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(loggedUserData?.message);
      refetch();
      navigate('/');
    }

    if (error) {
      if ('data' in error) {
        toast.error(error.data.message);
      }
    }
  }, [isError, isSuccess]);
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
    </form>
  );
};
export default Form;
