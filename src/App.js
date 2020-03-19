import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Nav from "./components/Nav";
import SubTotal from "./components/SubTotal/SubTotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";

class App extends Component {
  state = {
    total: 110.99,
    PickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0
  };
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <Container className="purchase-card">
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.PickupSavings.toFixed(2)} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal
              estimatedTotal={this.state.estimatedTotal.toFixed(2)}
            />
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
