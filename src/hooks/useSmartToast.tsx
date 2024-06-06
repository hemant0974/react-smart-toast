import { useState } from "react";
import SmartToast, {
  IToastTypes,
  IAllVariants,
  ISmartToastProps,
} from "../components/smartToast";
import { generateUniqueId } from "../utils/uniqueIdGenerator";

interface ISmartToastOptions {
  type: IAllVariants;
  subDesc?: string;
}

interface ISmartToastComponent {
  position?: ISmartToastProps["position"];
}

const useSmartToast = (props: ISmartToastComponent) => {
  const [list, setList] = useState<IToastTypes[]>([]);
  const [position, setPosition] = useState<ISmartToastProps["position"]>(
    props.position || "bottom-right"
  );

  const toastSmart = (
    title: string,
    options: ISmartToastOptions = {
      type: "success",
      subDesc: "",
    }
  ) => {
    const newToastOption = {} as IToastTypes;
    newToastOption.title = title;
    newToastOption.variant = options?.type;
    newToastOption.description = options?.subDesc || "";
    newToastOption.id = generateUniqueId();

    setList((prev) => [...prev, newToastOption]);
  };

  return {
    toastSmart,
    toastPosition: position,
    setToastPosition: setPosition,
    SmartToastComponent: (
      <SmartToast toastlist={list} setList={setList} position={position} />
    ),
  };
};

export default useSmartToast;
