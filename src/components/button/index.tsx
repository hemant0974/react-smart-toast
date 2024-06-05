import styles from "./button.module.scss";

interface IProps {
  children: string | React.ReactNode;
  color?: "primary" | "success" | "warning" | "error";
}

const Button = ({ children, color = "primary" }: IProps) => {
  return (
    <button className={`${styles.button} ${styles[color]}`}>{children}</button>
  );
};

export default Button;
