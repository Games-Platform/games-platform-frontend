import { FC } from 'react';
import styles from '@/assets/common/_Container.module.scss';

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}

const Container: FC<ContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
export default Container;
