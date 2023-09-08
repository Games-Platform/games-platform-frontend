import { FC } from 'react';
import styles from './HeadingH2.module.scss';

interface IProps {
  children: string;
}

const h2Heading: FC<IProps> = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);

export default h2Heading;
