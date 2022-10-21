import React from "react";
import Nav from "react-bootstrap/Nav";
import "./App.css";
// import Navbar from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <div>
      <Nav className="me-auto">
        <Nav.Link href="/testing#">Add Posts </Nav.Link>
        <Nav.Link href="/testing#/testing">Show Posts</Nav.Link>
      </Nav>
    </div>
  );
}
export default Navbar;
