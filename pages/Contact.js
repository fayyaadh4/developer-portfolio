import Layout from "../components/Layout";
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <Layout>
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={8}>
      <Jumbotron style={{backgroundColor: 'lavender'}}>
      <h2>Contact details</h2>
      <ul>
        <li>
          <b>Address:</b> Cape Town. South
          Africa.
        </li>
        <li>
          <b>Telephone number: </b>0764056777
        </li>
        <li>
          <b>Email address: </b>
          <a href="mailto: fayyaadh.naidoo@gmail.com" target="_blank">
            fayyaadh.naidoo@gmail.com
          </a>
        </li>
        <li>
          <b>LinkedIn: </b>
          <a
            href="https://www.linkedin.com/in/fayyaadh-naidoo-1ab892100/"
            target="_blank"
          >
            Fayyaadh Naidoo LinkedIn Account
          </a>
        </li>
        <li>
          <b>GitHub: </b>
          <a href="https://github.com/fayyaadh4" target="_blank">
            Fayyaadh Naidoo GitHub Technical Profile
          </a>
        </li>
      </ul>
      </Jumbotron>
      </Col>
      </Row>
      <Jumbotron style={{backgroundColor: 'lightcyan', height: '250px'}}></Jumbotron>
      </Container>
      <style jsx>{`
        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  </Layout>
);

export default Contact;
