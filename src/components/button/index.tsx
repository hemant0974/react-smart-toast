import { variantClasses } from "../../constants/buttonList";

interface IProps {
  children: string | React.ReactNode;
  color?: "info" | "success" | "warning" | "error";
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  color = "info",
  className,
  onClick = () => {},
}: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
