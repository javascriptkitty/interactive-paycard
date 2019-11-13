import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import { getThemeProps } from "@material-ui/styles";

type TextInputProps = {
  title?: string;
  value?: string;
  inputName?: string;
  handleChange?: Function;
};

const TextInput = ({ title, value, handleChange }: TextInputProps) => {
  return (
    <div className="cardForm-input">
      <span>{title}</span>
      <TextField
        defaultValue={value}
        id="outlined-secondary"
        variant="outlined"
        color="primary"
        onChange={e => handleChange}
      />
    </div>
  );
};

export default TextInput;
