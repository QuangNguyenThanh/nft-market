import React, { ChangeEvent } from "react";

interface CheckBoxProps {
  name: string;
  id: number;
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ name, id }) => {
  const onChangeCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    // if()
    // console.log("ev", checked);
  };
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id={name}
          type="checkbox"
          value={name}
          className="w-4 h-4 rounded"
          onChange={onChangeCheckBox}
        />
        <label
          htmlFor={name}
          className="ml-2 text-sm font-medium text-gray-check-box dark:text-gray-300"
        >
          {name}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
