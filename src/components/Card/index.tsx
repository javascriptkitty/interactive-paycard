import React from "react";
import TextInput from "../TextInput";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-top">
        <TextInput />
      </div>

      <div className="card-bottom">
        <div className="card-bottom-cardHolder">
          <TextInput />
        </div>
        <div className="card-bottom-expires">
          <TextInput title="Expires" />
        </div>
      </div>
    </div>
  );
};

export default Card;
