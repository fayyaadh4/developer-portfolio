import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Menu = () => (
  <div className="links">
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
    <style jsx>{`
      .links {
        padding: 10px;
        border-bottom: 1px solid lightgray;
      }
    `}</style>
  </div>
);

export default Menu;
