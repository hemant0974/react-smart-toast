import React, { useState } from "react";
import SmartToast, {
  IToastTypes,
  IAllVariants,
} from "../components/smartToast";

interface ISmartToastOptions {
  type: IAllVariants;
  subDesc?: string;
}

const useSmartToast = () => {
  const [list, setList] = useState<IToastTypes[]>([]);

  const toastSmart = (title: string, { type, subDesc }: ISmartToastOptions) => {
    const newToastOption = {} as IToastTypes;
    newToastOption.title = title;
    newToastOption.variant = type;
    newToastOption.description = subDesc || "";
    newToastOption.id = list.length + 1;

    setList([...list, newToastOption]);
  };

  return {
    toastSmart,
    SmartToastComponent: () => (
      <SmartToast toastlist={list} position="bottom-center" setList={setList} />
    ),
  };
};

export default useSmartToast;
