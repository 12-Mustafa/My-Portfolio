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
            I am a Master’s student in Data Science, AI, and Digital Business based in Germany,
            seeking a mandatory Data Analyst / Business Intelligence internship starting April 2026.
            <br />
            My primary focus is on SQL-based data analysis, KPI reporting, dashboard development,
            and transforming raw data into clear, business-ready insights.
           <br />
            I have hands-on experience working with Python (Pandas, NumPy), SQL, and Power BI
            to support data-driven decision-making and stakeholder reporting.
            <br/>
            Available for werkstudent roles upto 20hr/week based in Berlin/Potsdam/remote.
            <p>English: C1, German: A2(currently learning) </p> 
            <br />
            <br />
            
          </p>
          <ul>
        
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
