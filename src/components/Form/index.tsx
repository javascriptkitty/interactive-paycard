import React from "react";
import TextInput from "../TextInput";
import SimpleSelect from "../Select";
import Button from "@material-ui/core/Button";

import "./style.css";

// const months: string[] = [];
// let i: any = 1;
// while (i <= 12) {
//   i > 9 ? (i = i.toString()) : (i = "0" + i);
//   months.push(i);
// }
const months: string[] = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
];
const years: string[] = ["2019", "2020", "2021", "2022", "2023", "2024"];

type FormState = {
  number: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
};

export default class CardForm extends React.Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      number: "",
      name: "",
      month: "",
      year: "",
      cvv: ""
    };
  }

  handleChange = (field: string, e: React.FormEvent<HTMLInputElement>) => {
    const newstate: FormState = {
      ...this.state,
      [field]: e.currentTarget.value
    };
    this.setState(newstate);
  };

  render() {
    return (
      <div className="cardForm">
        <form>
          <TextInput
            title="Card Number"
            inputName="number"
            handleChange={this.handleChange.bind(this, "number")}
          />
          <TextInput title="Card Name" />
          <div className="cardForm-date-cvv">
            <div className="cardForm-date">
              <span>Expiration Date</span>
              <div className="cardForm-date-selects">
                <SimpleSelect title="Month" data={months} inputName="month" />
                <SimpleSelect title="Year" data={years} inputName="year" />
              </div>
            </div>
            <div className="cardForm-cvv">
              <TextInput title="CVV" />
            </div>
          </div>

          <Button variant="contained" color="primary" size="large">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
