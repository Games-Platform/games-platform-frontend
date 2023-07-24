import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { EnumColors, EnumSizes, TColors, TLinkSizes } from '@/types/Types';
import styles from '@/components/linkComponent/LinkComponent.module.scss';

interface ILink {
  to: string;
  color?: TColors;
  sizes?: TLinkSizes;
  children: string;
}

const LinkComponent: FC<ILink> = ({
  to,
  children,
  color = EnumColors.ORANGE,
  sizes = EnumSizes.SMALL,
}) => (
  <Link
    to={to}
    className={classNames(styles.link, styles[color], styles[sizes])}
  >
    {children}
  </Link>
);

LinkComponent.defaultProps = {
  color: EnumColors.ORANGE,
  sizes: EnumSizes.SMALL,
};

export default LinkComponent;
