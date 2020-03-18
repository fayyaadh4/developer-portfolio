import React from "react";

const footerStyle = {
  borderTop: "1px solid",
  padding: 10,
  marginTop: 100,
  textAlign: "right",
  color: "green"
};

const Footer = () => (
  <div style={footerStyle}>
    <p>This online portfolio was developed using Next.js</p>
  </div>
);

export default Footer;
