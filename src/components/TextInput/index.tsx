import React from "react";
import TextField from "@material-ui/core/TextField";

import "./style.css";

type TextInputProps = {
  title?: string;
  value?: string;
  type?: string;
  maxLength?: number;
  handleChange?: Function;
  handleInput?: Function;
};

const TextInput = ({ title, value, type, maxLength, handleChange }: TextInputProps) => {
  return (
    <div className="cardForm-input">
      <span>{title}</span>

      <TextField
        type={type}
        variant="outlined"
        color="primary"
        value={value}
        onChange={e => handleChange!(e.target.value)}
        // onInput={e => handleInput!(e)}
        onInput={e => {
          (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.toString().slice(0, maxLength);
        }}
      />
    </div>
  );
};

export default TextInput;
