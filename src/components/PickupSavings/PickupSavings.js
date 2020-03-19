import React, { Component, Fragment } from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

const styles = {
  pickupSavings: {
    textDecoration: "underline"
  },
  totalSavings: {
    color: "#dc3545",
    fontWeight: "bold"
  }
};

export class PickupSavings extends Component {
  render() {
    const tooltip = (
      <Tooltip id="tooltip">
        <p>
          Picking up your order in the store helps cut costs, and pass the
          savings on to you!
        </p>
      </Tooltip>
    );
    return (
      <Fragment>
        <Row className="show-grid">
          <Col md={6}>
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <div style={styles.pickupSavings}>Pickup Savings</div>
            </OverlayTrigger>
          </Col>
          <Col style={styles.totalSavings} md={6}>
            {`£${this.props.price}`}
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default PickupSavings;
