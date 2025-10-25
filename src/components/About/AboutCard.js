import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Mohammed Mustafa </span>
            from <span className="blue"> Berlin, Germany.</span>
            <br />
            I am in search of internship and werkstudent roles as an data Enthusiast.
            <br />
            Pursuing Masters in Data science and Artificial Intelligence at Gisma university of applied science Germany,
            additionally Masters in International Business Managment from kingston university London
            <br />
            <br />
            Apart from Project building in my leasure I spend time on other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Community building    
            </li>
            <li className="about-activity">
              <ImPointRight /> business creation 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mustafa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
