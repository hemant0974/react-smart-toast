import { useState } from "react";
import Button from "./components/button";
import SmartToast from "./components/smartToast";
import styles from "./app.module.scss";

const variants = ["primary", "success", "warning", "error"] as const;

const App = () => {
  const [list, setList] = useState<any>([]);
  let toastProperties = null;

  const showToast = (type: (typeof variants)[number]) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#5cb85c",
        };
        break;
      case "error":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          backgroundColor: "#d9534f",
        };
        break;
      case "primary":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties]);
  };

  const handleBtnClick = (variant: (typeof variants)[number]) => {
    showToast(variant);
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.btnContainer}>
        {variants.map((variant) => (
          <Button onClick={() => handleBtnClick(variant)} color={variant}>
            {variant}
          </Button>
        ))}
      </div>
      <SmartToast toastlist={list} position="buttom-right" setList={setList} />
    </div>
  );
};

export default App;
