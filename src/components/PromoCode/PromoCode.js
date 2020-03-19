import React, { Component } from "react";
import { Button, Collapse, Form, Row, Col } from "react-bootstrap";

export class PromoCode extends Component {
  state = {
    open: false,
    value: ""
  };

  handleChange() {
    console.log("changed");
  }

  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `} promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <Row className="show-grid">
            <Col md={12}>
              <Form>
                <Form.Group controlId="formInlineName">
                  <Form.Label>Promo code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter promo code"
                    value={this.props.promoCode}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Button
                  variant="info"
                  block
                  disabled={this.props.isDisabled}
                  onClick={this.props.giveDiscount}
                >
                  Apply
                </Button>
              </Form>
            </Col>
          </Row>
        </Collapse>
      </div>
    );
  }
}

export default PromoCode;
