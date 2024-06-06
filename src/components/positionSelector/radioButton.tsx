import React from "react";

interface IRadioButton {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const RadioButton = (props: IRadioButton) => {
  const { id, name, value, label, checked, onChange } = props;
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioButton;
