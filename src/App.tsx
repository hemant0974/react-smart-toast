import { useState } from "react";
import Button from "./components/button";
import SmartToast from "./components/smartToast";
import styles from "./app.module.scss";

const variants = ["primary", "success", "warning", "error"] as const;

interface IToastTypes {
  id: number;
  title: string;
  description: string;
  variant: (typeof variants)[number];
}

const App = () => {
  const [list, setList] = useState<IToastTypes[]>([]);
  let toastProperties: IToastTypes | null = null;

  const showToast = (type: (typeof variants)[number]) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          variant: "success",
        };
        break;
      case "error":
        toastProperties = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          variant: "error",
        };
        break;
      case "primary":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          variant: "primary",
        };
        break;
      case "warning":
        toastProperties = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          variant: "warning",
        };
        break;
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
      <SmartToast toastlist={list} position="bottom-center" setList={setList} />
    </div>
  );
};

export default App;
