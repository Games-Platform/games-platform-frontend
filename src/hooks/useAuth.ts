import { useCookies } from 'react-cookie';
import { useCheckUserQuery } from '@/store/services/auth';

const useAuth = () => {
  const [cookies] = useCookies(['logged_in']);
  const { data, refetch, isLoading, isSuccess } = useCheckUserQuery(null, {
    skip: !cookies.logged_in,
    refetchOnMountOrArgChange: !cookies.logged_in,
  });

  return {
    isAuth: cookies.logged_in,
    userData: data,
    refetch,
    isLoading,
    isSuccess,
  };
};

export default useAuth;
