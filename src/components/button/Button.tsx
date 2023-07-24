import { FC } from 'react';
import classNames from 'classnames';
import styles from '@/components/button/Button.module.scss';
import { EnumSizes, EnumColors, TButtonSizes, TColors } from '@/types/Types';

interface IButton {
  children: string | JSX.Element | JSX.Element[];
  size?: TButtonSizes;
  color?: TColors;
  onClick?: () => void;
  type: 'button' | 'submit';
}

const Button: FC<IButton> = ({
  children,
  onClick,
  type,
  size = EnumSizes.DEFAULT,
  color = EnumColors.ORANGE,
}) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
    className={classNames(styles.button, styles[size], styles[color])}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: EnumSizes.DEFAULT,
  color: EnumColors.ORANGE,
  onClick: () => ({}),
};

export default Button;
