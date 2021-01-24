import React from "react";
import { InputStore, ActionTypes } from "./components/Reducers/inputReducer";
import Card from "./components/Card";
import CardForm from "./components/Form";
import Container from "@material-ui/core/Container";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state: InputStore) => {
  return {
    number: state.number,
    name: state.name,
    month: state.month,
    year: state.year,
    cvv: state.cvv,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => {
  return {
    updateNumber: (data: string) => dispatch({ type: "updateNumber", number: data }),
    updateName: (data: string) => dispatch({ type: "update_Name", name: data }),
    updateMonth: (data: string) => dispatch({ type: "update_Month", month: data }),
    updateYear: (data: string) => dispatch({ type: "update_Year", year: data }),
    updateCVV: (data: string) => dispatch({ type: "update_CVV", cvv: data }),
  };
};

type PropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class App extends React.Component<PropsType> {
  render() {
    const { number, name, month, year, cvv } = this.props;

    return (
      <div className="App">
        <Container>
          <Card name={name} number={number} month={month} year={year} />
          <CardForm
            //{...this.props}
            name={name}
            number={number}
            month={month}
            year={year}
            cvv={cvv}
            onNameChange={this.props.updateName}
            onNumberChange={this.props.updateNumber}
            onMonthChange={this.props.updateMonth}
            onYearChange={this.props.updateYear}
            onCVVChange={this.props.updateCVV}
          />
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
