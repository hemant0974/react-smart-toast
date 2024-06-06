import React from "react";
import RadioButton from "./radioButton";
import { ISmartToastProps } from "../smartToast";

interface IProps {
  selectedPosition: ISmartToastProps["position"];
  setSelectedPosition: React.Dispatch<
    React.SetStateAction<ISmartToastProps["position"]>
  >;
}

const positions = [
  { value: "top-left", label: "Top Left" },
  { value: "top-right", label: "Top Right" },
  { value: "top-center", label: "Top Center" },
  { value: "bottom-center", label: "Bottom Center" },
  { value: "bottom-left", label: "Bottom Left" },
  { value: "bottom-right", label: "Bottom Right" },
];

const PositionSelector = (props: IProps) => {
  const { selectedPosition, setSelectedPosition } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setSelectedPosition(event.target.value);
  };

  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 lg:mx-48 xs:mx-4 my-6 gap-2 text-center">
      {positions.map((position) => (
        <RadioButton
          key={position.value}
          id={position.value}
          name="position"
          value={position.value}
          label={position.label}
          checked={selectedPosition === position.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default PositionSelector;
