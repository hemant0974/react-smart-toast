interface IProps {
  children: string | React.ReactNode;
  color?: "primary" | "success" | "warning" | "error";
}

const style: React.CSSProperties = {
  margin: "0px",
  padding: "6px 16px",
  minWidth: "64px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: "500",
  fontSize: "0.875rem",
  lineHeight: "1.75",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  borderRadius: "4px",
};

const Button = ({ children, color = "primary" }: IProps) => {
  switch (color) {
    case "primary":
      style.backgroundColor = "hsl(210, 100%, 42%)";
      style.color = "#fff";
      break;
    case "success":
      style.backgroundColor = "rgb(46, 125, 50)";
      style.color = "#fff";
      break;
    case "warning":
      style.backgroundColor = "rgb(237, 108, 2)";
      style.color = "#fff";
      break;
    case "error":
      style.backgroundColor = "rgb(211, 47, 47)";
      style.color = "#fff";
      break;
  }
  return <button style={{ ...style }}>{children}</button>;
};

export default Button;
