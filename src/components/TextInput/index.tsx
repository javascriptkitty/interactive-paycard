import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";

type TextInputProps = {
  title: string;
};

const TextInput = ({ title }: TextInputProps) => {
  return (
    <div className="cardForm-input">
      <span>{title}</span>
      <TextField id="outlined-secondary" variant="outlined" color="primary" />
    </div>
  );
};

export default TextInput;
