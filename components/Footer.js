import React from "react";
import { Container } from 'react-bootstrap';

const footerStyle = {
  borderTop: "1px solid",
  padding: 10,
  marginTop: 100,
  textAlign: "right",
  color: "green"
};

const Footer = () => (
  <div style={footerStyle}>
    <Container>
    <p>This online portfolio was developed by Fayyaadh Naidoo using Next.js</p>
    </Container>
  </div>
);

export default Footer;
