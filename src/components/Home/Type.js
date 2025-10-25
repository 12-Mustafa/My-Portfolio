import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DATA SCIENTIST",
          "MACHINE LEARNING ENGINEER",
          "DATA ANALYST",
          "MODEL TRANNING",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
