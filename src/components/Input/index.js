import React from "react";
import { InputStyle } from "./Input.module";

export const Input = ({ placeholder, error = false, disabled, helperText }) => {
  let inputClass;
  let labelClass;

  if (error === true) {
    inputClass = "input-error";
    labelClass = "label-error";
  }

  return (
    <InputStyle>
      <label className={labelClass}>
        Label
        <input
          className={inputClass}
          placeholder={placeholder}
          {...error}
          disabled={disabled}
        >
          {/* <img src={startIcon} alt/> */}
        </input>
        <p>{helperText}</p>
      </label>
    </InputStyle>
  );
};
