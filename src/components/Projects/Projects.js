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
import KPI from "../../Assets/Projects/KPI.png"
import coffie from "../../Assets/Projects/coffie.png"
import Equity from "../../Assets/Projects/Equity.png"

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
              imgPath={KPI}
              isBlog={false}
              title=" Sales KPI Analysis & Dashboard (SQL + BI) "
              description="Built a SQL-based sales performance analysis and interactive Power BI dashboard to support KPI tracking and business decision-making."
              ghLink="https://github.com/12-Mustafa/Sales-KPI-Analysis-Dashboard-SQL-BI-.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffie}
              isBlog={false}
              title="Coffee Quality & Supplier Decision Analysis"
              description="Analyzed coffee quality and defect data to identify key factors influencing quality scores and support data-driven supplier selection."
              ghLink="https://github.com/12-Mustafa/Coffe-Sourcing.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Equity}
              isBlog={false}
              title="Market Performance & Risk Analysis (Crypto vs Equity) "
              description="Compared historical performance and risk characteristics of cryptocurrency and equity assets using trend and volatility analysis."
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
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sign Language Detection"
              description="Developed a machine learning model to recognize hand signs from image data. Implemented preprocessing, feature extraction, and classification using deep learning. Aimed at bridging communication gaps for the deaf and mute community"
              ghLink=""
            />
          </Col> 
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
