import Layout from "../components/Layout";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const cards = {
  textAlign: "center",
  margin: "100"
};

const Project = () => (
  <Layout>
    <Container>
      <h2>Projects</h2>
      <div style={cards}>
        <style jsx>
          {`
            .card {
              margin: 50px;
            }
          `}
        </style>
        <Row>
          <Col>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Itune search app</Card.Title>
                  <Card.Text>
                    Itunes search app was created using React, HTML, Javascript
                    and CSS. The data used for this app was obtained from the
                    itunes search API. The app was then deployed on heroku.
                  </Card.Text>
                  <Card.Link
                    href="https://itunes-search-app-fn.herokuapp.com/"
                    target="_blank"
                  >
                    Link to app
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Minesweeper</Card.Title>
                  <Card.Text>
                    This minesweeper game was developed using React and
                    javascript as a project for my portfolio.
                  </Card.Text>
                  <Card.Link
                    href="https://protected-scrubland-73603.herokuapp.com/"
                    target="_blank"
                  >
                    Link to game
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Hypersports Online Store</Card.Title>
                  <Card.Text>
                    This hypothetical online store was created to enhance my
                    coding skills and was created using javascript, HTML and
                    CSS.
                  </Card.Text>
                  <Card.Link
                    href="https://fayyaadh4.github.io/hyperSports/"
                    target="_blank"
                  >
                    Link to GitHub
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Online CV</Card.Title>
                  <Card.Text>
                    This online CV was the beginning of my journey and only
                    implemented HTML and CSS for its design.
                  </Card.Text>
                  <Card.Link
                    href="https://fayyaadh4.github.io/Fayyaadh_Naidoo_CV/"
                    target="_blank"
                  >
                    Link to GitHub
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </Layout>
);

export default Project;
