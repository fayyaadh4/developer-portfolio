import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const layoutStyle = {
  textAlign: "center",
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: "lightcyan"
};

//CDN link important for react-bootstrap to work
const Layout = props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <div style={layoutStyle}>
      <Menu></Menu>
      {props.children}
      <Footer></Footer>
    </div>
    <style global jsx>{`
      h2 {
        color: red;
      }
    `}</style>
  </div>
);

export default Layout;
