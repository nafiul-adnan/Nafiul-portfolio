import React from "react";
import Particle from "../Particle";
import ArticleContent from "./ArticleContent";
import ArticleList from "./ArticleList";

import { Col, Container, Row } from "react-bootstrap";

import YoutubeCard from "./YoutubeCard";

export default function App() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
          <strong className="purple">Featured Videos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <YoutubeCard 
            embedId="Lwxc7czaiIQ" 
            title="13 Tips for Computer Science and Software Engineering 1st year Students"
            videoLink=""/>
          </Col>
          <Col md={4} className="project-card">
            <YoutubeCard 
            embedId="9ydPfbHJuDU" 
            title="সিএসই পড়তে ভার্সিটি কীভাবে সিলেক্ট করবেন? গুগলে ভার্সিটি কেমন ম্যাটার করে? Nafiul Adnan Chowdhury"
            videoLink=""/>
          </Col>
        </Row>

        <ArticleList articles={ArticleContent} />

      </Container>
    </Container>
  );
}