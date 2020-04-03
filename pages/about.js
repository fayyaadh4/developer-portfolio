import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const About = () => (
  <Layout>
    <div>
      <Container>
        <h2>About</h2>
        <br />
        <div>
          <h4>Educational Qualifications</h4>
          <Table striped bordered>
            <tbody>
              <tr>
                <td>2020</td>
                <td>
                  <p>Full Stack Web Development course at HyperionDev </p>
                  <p>
                    Technologies used: React, MongoDB, Node.js, Next.js,
                    Express, JQuery, Javascript, HTML and CSS.
                  </p>
                </td>
              </tr>
              <tr>
                <td>2019</td>
                <td>
                  Self -taught myself C#, .NET and Angular through various
                  websites, textbooks and youtube tutorials.
                </td>
              </tr>
              <tr>
                <td>2017-2019 (Finalising)</td>
                <td>
                  M.Sc in Nanoscience at The University of the Western Cape
                </td>
              </tr>
              <tr>
                <td>2016</td>
                <td>
                  B.Sc(Honours) in Chemical Science at The University of The
                  Western Cape. <b>Cum Laude</b>{" "}
                </td>
              </tr>
              <tr>
                <td>2011 – 2015</td>
                <td>
                  B.Sc. in Chemical Science at The University of The Western
                  Cape
                </td>
              </tr>
              <tr>
                <td>2006 – 2010</td>
                <td>
                  National Senior Certificate at Alexander Sinton High School
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <div>
          <h4>Employment History</h4>
          <Table bordered variant="dark">
            <tbody>
              <tr>
                <td>2017-2019</td>
                <table>
                  <tbody>
                <tr>
                  <td>Part-time</td>
                </tr>
                <tr>
                  <td>
                    Working promotions, Tutoring, Demonstrating 1st and 2nd year
                    Chemistry practical’s
                  </td>
                </tr>
                </tbody>
              </table>
              </tr>
              <tr>
                <td>Dec 2014 - Jan 2016</td>
                <table>
                  <tbody>
                <tr>
                  <td>Marshall(Photographer)</td>
                </tr>
                <tr>
                  <td>Action Lens Photography, Canal Walk</td>
                </tr>
                <tr>
                  <td>Temporary Job(Vacation Work)</td>
                </tr>
                <tr>
                  <td>
                    This job including many duties such as taking photographs,
                    working the cash register and creating a controlled
                    environment. Most of the day was spent interacting with
                    customers. Giving them the best service which they deserve.
                  </td>
                </tr>
                </tbody>
                </table>
              </tr>
              <tr>
                <td>2014-2015</td>
                <table>
                  <tbody>
                <tr>
                  <td>Student assistant</td>
                </tr>
                <tr>
                  <td>Temporary Work</td>
                </tr>
                <tr>
                  <td>Student Enrolment Management Unit, UWC</td>
                </tr>
                </tbody>
                </table>
              </tr>
            </tbody>
          </Table>
        </div>
        <br />
        <div>
          <h4>Interests and Hobbies</h4>
          <p>
            I have a keen interest in the latest technology trends, ever
            changing development languages and sporting and outdoor activities.
            Activities of this nature include hiking, camping, rugby, soccer and
            I’ve even dabbled in some combat sport. Other interests I have are
            paintballing, reading (mostly fantasy books and manga), strategy
            games and practicing healthy living.
          </p>
        </div>
      </Container>
    </div>
  </Layout>
);

export default About;
