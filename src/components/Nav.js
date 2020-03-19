import React from "react";
import { Navbar } from "react-bootstrap";
import { FaReact, FaShoppingBasket } from "react-icons/fa";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="container">
        <Navbar.Brand href="#home">
          React Checkout
          <FaReact
            color="#00d8ff"
            size="30"
            className="d-inline-block align-top ml-2 mr-2"
          />
          <FaShoppingBasket size="30" className="d-inline-block align-top" />
        </Navbar.Brand>
      </div>
    </Navbar>
  );
}

export default Nav;
