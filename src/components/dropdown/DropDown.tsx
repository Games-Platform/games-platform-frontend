import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import styles from '@/components/dropdown/DropDown.module.scss';
import { useLogoutMutation } from '@/store/services/auth';
import Avatar from '@/components/avatar/Avatar';
import { dropDownItems } from '@/utils/GlobalVars';

const DropDown = () => {
  const [dropdownState, setDropdownState] = useState(false);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const [logout, { isError, isSuccess }] = useLogoutMutation();

  const handleShowDropdown = () => {
    setDropdownState(true);
  };

  const handleHideDropdown = () => {
    setDropdownState(false);
  };

  const handleLogout = async (e: React.SyntheticEvent) => {
    if ((e.target as HTMLLinkElement).textContent === 'Logout') {
      await logout(null);
      navigate(pathname);
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
    <div className="dropdown" onMouseLeave={handleHideDropdown}>
      <div
        className={styles['dropdown-list']}
        aria-hidden="true"
        onMouseEnter={handleShowDropdown}
      >
        <Avatar />
      </div>

      <div
        className={`${styles['dropdown-items']} ${
          dropdownState ? `${styles.isVisible}` : `${styles.isHidden}`
        }`}
        aria-hidden="true"
        onMouseLeave={handleHideDropdown}
      >
        {dropDownItems.map(({ name, to }) => (
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
  );
};
export default DropDown;
