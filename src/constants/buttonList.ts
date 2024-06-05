import { IToastTypes } from "../components/smartToast";

export const buttonList: Omit<IToastTypes, "id">[] = [
  {
    title: "Success",
    description: "This is a success toast component",
    variant: "success",
  },
  {
    title: "Danger",
    description: "This is a danger toast component",
    variant: "error",
  },
  {
    title: "Info",
    description: "This is a info toast component",
    variant: "info",
  },
  {
    title: "Warning",
    description: "This is a warning toast component",
    variant: "warning",
  },
];
