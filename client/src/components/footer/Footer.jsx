
import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar bg="light" fixed="bottom">
        <Container>
          <p>Copyright &copy; 2022</p>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;