import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nvidia vs Bitcoin stock price predection "
              description="Machine learning Model which predicts Traditional stock price of Nvidia vs Bitcoin to compare which stock is predicted accurately with various machine learning models and found the accuracy of best performing model"
              ghLink="https://github.com/12-Mustafa/Nvidia-vs-bitcoin-prediction-.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News Article category detection"
              description="NLP project that classifies news articles into predefined categories. model training using supervised learning algorithms, demonstrating end-to-end NLP workflow for text classification"
              ghLink="https://github.com/12-Mustafa/News-Airticle-Detection.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coffe Sourcing "
              description="Analyzed the coffee dataset and feature analysis. Implemented visualizations with Matplotlib, Seaborn, and Plotly to identify trends and correlations for the coffe quality and various types."
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Agriculture yield predection"
              description="Built a machine learning model to forecast crop yields based on soil, weather, and seasonal data. Applied data preprocessing, feature engineering, and regression models for accurate predictions. Supports farmers and policymakers in making data-driven agricultural decisions."
              ghLink="https://github.com/12-Mustafa/Agriculture-Yield-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-commerce Customer behaviour"
              description="Analyzed a dataset of over 2 million customer orders to study purchasing patterns, reordering trends, and product preferences. Applied data preprocessing and advanced visualization techniques to uncover consumer insights. Findings support data-driven strategies for inventory management, product placement, and customer retention."
              ghLink="https://github.com/12-Mustafa/Ecommerece-customer-analysis-.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sign Language Detection"
              description="Developed a machine learning model to recognize hand signs from image data. Implemented preprocessing, feature extraction, and classification using deep learning. Aimed at bridging communication gaps for the deaf and mute community"
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
