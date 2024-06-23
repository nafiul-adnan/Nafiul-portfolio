import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import daily_shop from "../../Assets/Projects/daily_shop.png";
import photo_management from "../../Assets/Projects/photo_management.png";
import princess_trouble from "../../Assets/Projects/princess_trouble.png";
import road_accident_map from "../../Assets/Projects/road_accident_map.png";

import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h1 className="project-heading">
          <strong className="purple">Personal & Client Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo_management}
              isBlog={false}
              title="Photo Management App"
              description="Lead a team of 3 to develop a photo management app for a client. Had to use several complex data structures like- Trie searching, to meet the client's need. Tools used: Java, Netbeans"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daily_shop}
              isBlog={false}
              title="Daily Shop Data"
              description="Delivered a Reporting applciation to a client to measure their daily sales reports. Used a isolated SQL database to use the data to generated several daily, weekly and monthly reports with proper graph and analysis. Tools used: ASP.NET MVC, SSRS, RDLC Reporting, SQL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={princess_trouble}
              isBlog={false}
              title="Princess Trouble"
              description="That was one of my university project I worked on to learn game development in Unity. That is a multi-level ball rolling game. Used C#, Unity, Monodevlopment for this project."
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={road_accident_map}
              secImagePath={road_accident_map}
              isBlog={false}
              title="Road Accident Analysis using Machine Learning"
              description="That was my final year thesis on Machine learning. We have analyzed road Accident data from newspapaper and found the most accident prone area, vehicle, etc. in Bangladesh. To get the news, we wrote python web-scrapper (beutifulSoap) that crawls all the news from the newspaper website.
              In this thesis- we have Used - Scikit-Learning, SVM, K-mean clustering, Naive Bayes Classifier, Cosine-Similarity, Jackard Similarity, K-th Nearest Neighbors, HMM, SVM and a lot of other algorithms and techniques.
              We have also cleaned data using our own algorithms and findings. Worked on heatmap to identify the most accident prone area."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
