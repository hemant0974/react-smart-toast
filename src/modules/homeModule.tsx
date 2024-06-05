import { useState } from "react";
import Button from "../components/button";
import SmartToast, {
  IAllVariants,
  IToastTypes,
} from "../components/smartToast";
import styles from "./home.module.scss";

const variants = ["info", "success", "warning", "error"] as const;

const HomeModule = () => {
  const [list, setList] = useState<IToastTypes[]>([]);
  let toastProperties: IToastTypes | null = null;

  const showToast = (type: IAllVariants) => {
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
      case "info":
        toastProperties = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          variant: "info",
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

  const handleBtnClick = (variant: IAllVariants) => {
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
      <SmartToast toastlist={list} position="bottom-right" setList={setList} />
    </div>
  );
};

export default HomeModule;
