import React from "react";
import TextInput from "../TextInput";
import "./style.css";

type CardProps = {};
type CardState = {
  number: string;
  name: string;
  expires: string;
};

class Card extends React.Component<CardProps, CardState> {
  state: CardState = {
    number: "####  ####  ####  ####",
    name: "CARD HOLDER",
    expires: "MM/YY"
  };
  render() {
    return (
      <div className="card">
        <div className="card-top">
          <TextInput value={this.state.number} />
        </div>

        <div className="card-bottom">
          <div className="card-bottom-cardHolder">
            <TextInput value={this.state.name} />
          </div>
          <div className="card-bottom-expires">
            <TextInput title="Expires" value={this.state.expires} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
