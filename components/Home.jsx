import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="App">
      <Typewriter
        words={["Eat", "Sleep", "Code", "Repeat!"]}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />
    </div>
  );
};
