import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";

const TextInput = props => {
  return (
    <div className="cardForm-input">
      <span>{props.title}</span>
      <TextField id="outlined-secondary" variant="outlined" color="primary" />
    </div>
  );
};

export default TextInput;
