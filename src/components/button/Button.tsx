import { FC } from 'react';
import classNames from 'classnames';
import styles from '@/components/button/Button.module.scss';
import { EnumSizes, EnumColors, TSizes, TColors } from '@/types/Types';

interface IButton {
  children: string;
  size?: TSizes;
  color?: TColors;
}

const Button: FC<IButton> = ({
  children,
  size = EnumSizes.DEFAULT,
  color = EnumColors.ORANGE,
}) => (
  <button
    type="button"
    className={classNames(styles.button, styles[size], styles[color])}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: EnumSizes.DEFAULT,
  color: EnumColors.ORANGE,
};

export default Button;
