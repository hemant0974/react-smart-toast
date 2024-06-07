import { useEffect, useState } from "react";
import SmartToast, {
  IToastTypes,
  IAllVariants,
  ISmartToastProps,
} from "../components/smartToast";
import { generateUniqueId } from "../utils/uniqueIdGenerator";
import { countDown } from "../utils/countDown";

interface ISmartToastOptions {
  type: IAllVariants;
  subDesc?: string;
}

interface ISmartToastComponent {
  position?: ISmartToastProps["position"];
}

const useSmartToast = (props: ISmartToastComponent) => {
  const [list, setList] = useState<IToastTypes[]>([]);
  const [expiredIds, setExpiredIds] = useState<string[]>([]);
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
    countDown(newToastOption.id, 4000).then((id) => {
      setExpiredIds((prev) => [...prev, id as string]);
    });
    setList((prev) => [...prev, newToastOption]);
  };

  useEffect(() => {
    expiredIds.forEach((id) => {
      const toastListItem = list.filter((e: IToastTypes) => e.id !== id);
      setList(toastListItem);
    });
  }, [expiredIds]);

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
