import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";

export class ItemDetails extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See ` : `Hide `} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Media>
              <img
                width={100}
                height={100}
                className="img-thumbnail align-self-start mr-3"
                alt="thumbnail"
                src="/img/boots.png"
              />
              <Media.Body>
                <p className="small">
                  Diadora Brasil Made In Italy K-Leather Pro FG (Size 9)
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`£${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`£${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
