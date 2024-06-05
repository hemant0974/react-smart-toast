import React, { useState } from "react";
import SmartToast, {
  IToastTypes,
  IAllVariants,
} from "../components/smartToast";

interface ISmartToastOptions {
  type: IAllVariants;
}

let toastOptions: IToastTypes | null = null;

const useSmartToast = () => {
  const [list, setList] = useState<IToastTypes[]>([]);

  const toastSmart = (title: string, { type }: ISmartToastOptions) => {
    switch (type) {
      case "success":
        toastOptions = {
          id: list.length + 1,
          title: "Success",
          description: "This is a success toast component",
          variant: "success",
        };
        break;
      case "error":
        toastOptions = {
          id: list.length + 1,
          title: "Danger",
          description: "This is a danger toast component",
          variant: "error",
        };
        break;
      case "info":
        toastOptions = {
          id: list.length + 1,
          title: "Info",
          description: "This is a info toast component",
          variant: "info",
        };
        break;
      case "warning":
        toastOptions = {
          id: list.length + 1,
          title: "Warning",
          description: "This is a warning toast component",
          variant: "warning",
        };
        break;
    }
    setList([...list, toastOptions]);
  };

  return {
    toastSmart,
    SmartToastComponent: () => (
      <SmartToast toastlist={list} position="bottom-center" setList={setList} />
    ),
  };
};

export default useSmartToast;
