import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  children?: string | JSX.Element | JSX.Element[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => (
  <p className={styles.errorMessage}>{children}</p>
);
export default ErrorMessage;
