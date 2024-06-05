import React, { useState } from "react";
import SmartToast, { IToastTypes } from "../components/smartToast";

const useSmartToast = () => {
  const [list, setList] = useState<IToastTypes[]>([]);
  return {
    SmartToastComponent: () => (
      <SmartToast toastlist={list} position="bottom-center" setList={setList} />
    ),
  };
};

export default useSmartToast;
