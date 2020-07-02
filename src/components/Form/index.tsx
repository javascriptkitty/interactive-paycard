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

type FormProps = {
  number: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
  onNameChange: Function;
  onNumberChange: Function;
  onMonthChange: Function;
  onYearChange: Function;
  onCVVChange: Function;
};
function handleSubmit(props: any) {
  console.log(props);
}
export default class CardForm extends React.Component<FormProps, FormState> {
  render() {
    return (
      <div className="cardForm">
        <form>
          <TextInput
            title="Card Number"
            value={this.props.number}
            handleChange={this.props.onNumberChange}
          />
          <TextInput
            title="Card Name"
            value={this.props.name}
            handleChange={this.props.onNameChange}
          />
          <div className="cardForm-date-cvv">
            <div className="cardForm-date">
              <span>Expiration Date</span>
              <div className="cardForm-date-selects">
                <SimpleSelect
                  handleChange={this.props.onMonthChange}
                  title="Month"
                  data={months}
                  value={this.props.month}
                />
                <SimpleSelect
                  handleChange={this.props.onYearChange}
                  title="Year"
                  data={years}
                  value={this.props.year}
                />
              </div>
            </div>
            <div className="cardForm-cvv">
              <TextInput
                title="CVV"
                value={this.props.cvv}
                handleChange={this.props.onCVVChange}
              />
            </div>
          </div>

          <Button
            onClick={handleSubmit.bind(null, this.props)}
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
