import Link from "next/link";
import { Navbar, Container, Row, Col } from 'react-bootstrap';

const linkStyle = {
  marginRight: 15,
  color: 'white'
};

const Menu = () => (
  <div className="links">
    <Container>
    <Navbar bg="primary" variant="dark">
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
    </Navbar>
    <p style={{color: 'lightcyan'}}>Fayyaadh Naidoo</p>
    </Container>
    <style jsx>{`
      .links {
        padding: 10px;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Menu;
