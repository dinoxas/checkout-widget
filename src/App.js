import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Nav from "./components/Nav";
import SubTotal from "./components/SubTotal/SubTotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

class App extends Component {
  state = {
    total: 100,
    PickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  };

  componentDidMount() {
    this.setState(
      {
        taxes: (this.state.total + this.state.PickupSavings) * 0.2
      },
      function() {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.PickupSavings + this.state.taxes
        });
      }
    );
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        function() {
          this.setState({
            disablePromoButton: true
          });
        }
      );
    }
  };

  checkoutAlert = e => {
    e.preventDefault();
    window.alert("Go to checkout");
  };

  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <h1 className="text-center mb-3 mt-3">Summary</h1>
          <Container className="purchase-card">
            <SubTotal price={this.state.total.toFixed(2)} />
            <PickupSavings price={this.state.PickupSavings.toFixed(2)} />
            <TaxesFees taxes={this.state.taxes.toFixed(2)} />
            <hr />
            <EstimatedTotal
              estimatedTotal={this.state.estimatedTotal.toFixed(2)}
            />
            <ItemDetails price={this.state.total.toFixed(2)} />
            <PromoCode
              giveDiscount={() => this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoButton}
              checkoutAlert={this.checkoutAlert}
            />
          </Container>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(App);
