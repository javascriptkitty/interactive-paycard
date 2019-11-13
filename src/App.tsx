import React from "react";
import Card from "./components/Card";
import CardForm from "./components/Form";
import Container from "@material-ui/core/Container";
import { createStore } from "redux";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Card />
        <CardForm />
      </Container>
    </div>
  );
};

export default App;
