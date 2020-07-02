import React from "react";
import TextInput from "../TextInput";
import "./style.css";

type CardProps = {
  number: string;
  name: string;
  month: string;
  year: string;
};

const BLANK_NUMBER = "####  ####  ####  ####";
const BLANK_NAME = "CARD HOLDER";
const BLANK_EXPIRES = "MM/YY";

class Card extends React.Component<CardProps> {
  render() {
    const expires =
      this.props.month && this.props.year
        ? `${this.props.month}/${this.props.year}`
        : undefined;

    return (
      <div className="card">
        <div className="card-top">
          <TextInput value={this.props.number || BLANK_NUMBER} />
        </div>

        <div className="card-bottom">
          <div className="card-bottom-cardHolder">
            <TextInput value={this.props.name.toUpperCase() || BLANK_NAME} />
          </div>
          <div className="card-bottom-expires">
            <TextInput title="Expires" value={expires || BLANK_EXPIRES} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
