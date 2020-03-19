import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class SubTotal extends Component {
  render() {
    return (
      <Row className="show-grid">
        <Col md={6}>Sub total</Col>
        <Col md={6}>{`£${this.props.price}`}</Col>
      </Row>
    );
  }
}

export default SubTotal;
