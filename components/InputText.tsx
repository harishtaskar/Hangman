import { type } from "os";
import React from "react";

type Props = {
  label: string;
  name: string;
  inputype: string;
  placeholder?: string;
  value: any;
  onChange: any;
};

const InputText = ({
  label,
  name,
  inputype,
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-base font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={inputype || "text"}
        value={value}
        placeholder={placeholder}
        className={`w-full border border-black rounded-lg px-3 py-2`}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
