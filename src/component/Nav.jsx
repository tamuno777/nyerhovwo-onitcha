import React from "react";
import Navbutton from "./Navbutton";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navs() {
  return (
    <>
      <Navbar className=" text-light nav-container w-100 ">
        <Container fluid className="d-block">
          <div>
            {" "}
            <h1 className="text-center pt-0  ">
              <strong>Nyerhovwo Onitcha</strong>
            </h1>
          </div>

          <Nav className="justify-content-center d-flex flex-grow-1 fs-5  nav-content  ">
            <div className="link mx-1">
              <Navbutton title="Home" to="/Home" />
            </div>
            <div className="link mx-1">
              <Navbutton title="Projects" to="/Projects" />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;
