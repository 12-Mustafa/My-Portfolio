import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

// Image-based logos
import scikitLearnLogo from "../../Assets/scikit-learn-logo.png";
import tensorflowLogo from "../../Assets/tensorflow.png";
import pytorchLogo from "../../Assets/pytorch-logo.png";
import opencvLogo from "../../Assets/OpenCV.png";
import matplotlibLogo from "../../Assets/matplotlib.png";
import seabornLogo from "../../Assets/seaborn-logo.png";
import mysqlLogo from "../../Assets/mysql-logo.png";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* React icons */}
      <br />
      <p><h1>-Proficient-</h1></p>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={mysqlLogo} alt="MySQL" style={{ width: "100px" }} />
      </Col>
    
      {/* Image logos */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={scikitLearnLogo} alt="Scikit-learn" style={{ width: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tensorflowLogo} alt="TensorFlow" style={{ width: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={pytorchLogo} alt="PyTorch" style={{ width: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={opencvLogo} alt="OpenCV" style={{ width: "100px" }} />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <br />
      <br />
      <p><h1>-Familiar-</h1></p>
      <br />
      <br />
      <Col xs={4} md={2} className="tech-icons">
        <img src={matplotlibLogo} alt="Matplotlib" style={{ width: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={seabornLogo} alt="Seaborn" style={{ width: "100px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>


    </Row>
  );
}

export default Techstack;
