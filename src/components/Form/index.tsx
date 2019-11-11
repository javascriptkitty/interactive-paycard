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

const CardForm: React.FC = () => {
  return (
    <div className="cardForm">
      <form>
        <TextInput title="Card Number" />
        <TextInput title="Card Name" />
        <div className="cardForm-date-cvv">
          <div className="cardForm-date">
            <span>Expiration Date</span>
            <div className="cardForm-date-selects">
              <SimpleSelect title="Month" data={months} />
              <SimpleSelect title="Year" data={years} />
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
};

export default CardForm;
