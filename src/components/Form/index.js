import React from "react";
import TextInput from "../TextInput";
// import "./style.css";

const CardForm = props => {
  return (
    <div className="cardForm">
      <form>
        <TextInput title="Card Number" />
        <TextInput title="Card Name" />
        <div className="cardForm-date-cvv">
          <div className="cardForm-date">
            <span>Expiration Date</span>
            <TextInput title="CVV" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
