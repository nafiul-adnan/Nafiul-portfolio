import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineYoutube
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

import myImg from "../../Assets/adnan.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My life changed when I started programming in my second year of computer science! Since then, Programming helped me to work with big tech industries like Workday, Google.
            <br />
            <br />
                Currently, while working as a Backend Developer, I'm also training several junior engineers and computer science students for their careers and studies. 
            <br />
            <br />
                I also run a YouTube channel where I share my knowledge with enthusiastic learners.
              &nbsp; 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
               <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/nafiuladnan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
                <li className="social-icons">
                <a
                  href="https://www.youtube.com/@NafiulAdnanChowdhuryn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nafiul-adnan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
