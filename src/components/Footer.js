import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
        <p>© Soumyajit Behera</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
