import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { EnumColors, TColors, TLinkSizes } from '@/types/Types';
import styles from '@/components/linkComponent/LinkComponent.module.scss';

interface ILink {
  to: string;
  color?: TColors;
  sizes: TLinkSizes;
  children: string;
}

const LinkComponent: FC<ILink> = ({
  to,
  color = EnumColors.ORANGE,
  children,
  sizes,
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
};

export default LinkComponent;
