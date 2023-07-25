import useAuth from '@/hooks/useAuth';
import styles from './Avatar.module.scss';

const Avatar = () => {
  const { userData } = useAuth();
  const avatarName = userData?.username[0].toUpperCase();
  return <div className={styles.avatar}>{avatarName}</div>;
};
export default Avatar;
