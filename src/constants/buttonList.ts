import { IToastTypes } from "../components/smartToast";

export const buttonList: Omit<IToastTypes, "id">[] = [
  {
    title: "Info",
    description: "This is a information toast component",
    variant: "info",
  },
  {
    title: "Success",
    description: "This is a success toast component",
    variant: "success",
  },
  {
    title: "Warning",
    description: "This is a warning toast component",
    variant: "warning",
  },
  {
    title: "Danger",
    description: "This is a danger toast component",
    variant: "error",
  },
];

export const variantClasses = {
  info: "bg-blue-600 text-white py-2 px-10 rounded hover:bg-blue-700",
  success: "bg-green-600 text-white py-2 px-10 rounded hover:bg-green-700",
  warning: "bg-yellow-600 text-white py-2 px-10 rounded hover:bg-yellow-700",
  error: "bg-red-600 text-white py-2 px-10 rounded hover:bg-red-700",
};
