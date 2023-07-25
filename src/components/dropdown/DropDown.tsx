import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import styles from '@/components/dropdown/DropDown.module.scss';
import Avatar from '../icons/Avatar';
import { useLogoutMutation } from '@/store/services/auth';
import useAuth from '@/hooks/useAuth';

const DropDown = () => {
  const [dropdownState, setDropdownState] = useState(false);

  const { refetch } = useAuth();

  const [logout, { isError, isSuccess }] = useLogoutMutation();

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const navItems = [
    { name: 'Account', to: '/profile' },
    { name: 'Settings', to: '/fdfdf' },
    { name: 'Logout', to: '/' },
  ];

  const handleLogout = async (e: React.SyntheticEvent) => {
    if ((e.target as HTMLLinkElement).textContent === 'Logout') {
      await logout(null);
      refetch();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Logged out success');
    }

    if (isError) {
      toast.error('Something went wrong');
    }
  }, [isSuccess, isError]);

  return (
    <div className="container">
      <div className="dropdown">
        <div
          onClick={handleDropdownClick}
          className={styles['dropdown-list']}
          aria-hidden="true"
        >
          <Avatar />
        </div>

        <div
          className={`${styles['dropdown-items']} ${
            dropdownState ? `${styles.isVisible}` : `${styles.isHidden}`
          }`}
          aria-hidden="true"
          onClick={handleDropdownClick}
        >
          {navItems.map(({ name, to }) => (
            <div className={styles['dropdown-item']} key={name}>
              <NavLink
                to={to}
                className={styles['dropdown-link']}
                onClick={handleLogout}
              >
                {name}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DropDown;
