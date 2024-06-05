import { useCallback, useEffect } from "react";
import styles from "./smartToast.module.scss";

export type IAllVariants = "info" | "success" | "warning" | "error";

export interface IToastTypes {
  id: number;
  title: string;
  description: string;
  variant: IAllVariants;
}

interface ISmartToastProps {
  toastlist: IToastTypes[];
  position:
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  setList: React.Dispatch<React.SetStateAction<IToastTypes[]>>;
}

const SmartToast = ({ toastlist, position, setList }: ISmartToastProps) => {
  const deleteToast = useCallback(
    (id: any) => {
      const toastListItem = toastlist.filter((e: any) => e.id !== id);
      setList(toastListItem);
    },
    [toastlist, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastlist.length) {
        deleteToast(toastlist[0].id);
      }
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [toastlist, deleteToast]);

  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastlist.map((toast: any, index: number) => (
        <div
          key={index}
          className={`${styles.notification} ${styles[position]} ${
            styles[toast.variant]
          }`}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <div>
            <p className={styles.title}>{toast.title}</p>
            <p className={styles.description}>{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmartToast;
