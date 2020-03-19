import React from "react";
import { Navbar } from "react-bootstrap";
import { FaReact, FaShoppingBasket } from "react-icons/fa";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <FaReact size="30" className="d-inline-block align-top mr-2" />
        <FaShoppingBasket size="30" className="d-inline-block align-top mr-2" />
        React Bootstrap
      </Navbar.Brand>
    </Navbar>
  );
}

export default Nav;
