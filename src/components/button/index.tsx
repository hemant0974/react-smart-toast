import styles from "./button.module.scss";

interface IProps {
  children: string | React.ReactNode;
  color?: "info" | "success" | "warning" | "error";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ children, color = "info", onClick = () => {} }: IProps) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[color]}`}>
      {children}
    </button>
  );
};

export default Button;
