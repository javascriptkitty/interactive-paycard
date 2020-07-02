import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";

type TextInputProps = {
  title?: string;
  value?: string;
  handleChange?: Function;
};

const TextInput = ({ title, value, handleChange }: TextInputProps) => {
  return (
    <div className="cardForm-input">
      <span>{title}</span>
      <TextField
        value={value}
        id="outlined-secondary"
        variant="outlined"
        color="primary"
        onChange={e => handleChange!(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
