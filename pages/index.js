import React from "react";
import Layout from "../components/Layout";
import { Card, Container, Row, Col } from "react-bootstrap";

const card = {
 backgroundColor: 'lavender'
};

const Welcome = () => (
  <Layout>
    <div>
      <Container>
        <Row className="justify-content-center">
      <h2>Welcome to the developer portfolio for Fayyaadh Naidoo</h2>
      </Row>
      <Row className="justify-content-center">
        <Col lg={5}>
      <Card style={card}>
        <Card.Img variant="top" src="/static/images/Fayyaadh.jpg" />
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            I began learning programming during my studies as a means of
            picking up an extra hobby and ended up falling in love with it. It
            felt like something which had been missing in my life and my only
            regret was not picking it up sooner. I then decided that this is
            what I wanna do for the rest of my life as it is something that
            always challenges you and picks your brain with all the problem
            solving that it involves. So, my next goal in life was to pursue a
            career in this field. This led me to HyperionDev where I enrolled in
            a Full Stack Web Development course in which I hope to improve upon
            my coding knowledge and hopefully transition into a career in
            Software Development once I'm done.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
      <style jsx>{`
        .card-body {
          backgroundColor: 'blue';
        }
        .card {
          backgroundColor: blue
        }
        h2 {
          color: blue;
        }
      `}</style>
    </div>
  </Layout>
);
export default Welcome;
