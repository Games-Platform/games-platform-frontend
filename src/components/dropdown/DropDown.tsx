import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '@/components/dropdown/DropDown.module.scss';
import Avatar from '../icons/Avatar';

const DropDown = () => {
  const [dropdownState, setDropdownState] = useState(false);

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const navItems = [
    { name: 'Account', to: '/' },
    { name: 'Settings', to: '/fdfdf' },
    { name: 'Logout', to: '/fdfd' },
  ];

  return (
    <div className="container">
      <div className="dropdown">
        <div onClick={handleDropdownClick} className={styles['dropdown-list']}>
          <Avatar />
        </div>

        <div
          className={`${styles['dropdown-items']} ${
            dropdownState ? `${styles.isVisible}` : `${styles.isHidden}`
          }`}
          onClick={handleDropdownClick}
        >
          {navItems.map(({ name, to }) => (
            <div className={styles['dropdown-item']}>
              <NavLink key={name} to={to} className={styles['dropdown-link']}>
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
