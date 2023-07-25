import { useCheckUserQuery } from '../store/services/auth';

const useAuth = () => {
  const { data, refetch, isLoading, isSuccess } = useCheckUserQuery(null);

  return {
    isAuth: isSuccess,
    userData: data,
    refetch,
    isLoading,
  };
};

export default useAuth;
