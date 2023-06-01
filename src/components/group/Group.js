import React, { useState } from "react";
import Progress from "../progress/Progress";
import Skills from "../skills/Skills";
import Description from "../Description/Description";

export default function Group({ component }) {
  let information;
  if (component.component !== "skills") {
    information = component.info.map((el, index) => (
      <Progress key={index} obj={el} />
    ));
  } else {
    information = component.info.map((el, index) => (
      <Skills key={index} obj={el} />
    ));
  }

  const [angle, setAngle] = useState(0);
  const [active, setActive] = useState("");

  const openDrop = () => {
    if (angle === 90) {
      setAngle(0);
      setActive("");
    } else {
      setAngle(90);
      setActive("active");
    }
  };
  return (
    <div
      className={`section${
        component.component !== "skills"
          ? "__originality small"
          : "__nonmonotonicity large"
      } ${active}`}
    >
      <div className="section__title">
        <div
          onClick={openDrop}
          className="dropdown arrow"
          style={{
            backgroundImage: `url(./img/arrow-down.svg)`,
            transform: `rotate(${angle}deg)`,
          }}
        ></div>
        <span>{component.title}</span>
      </div>
      <div className="section__subtitle">
        <span>{component.subtitle}</span>
      </div>
      <div
        className="stats"
        style={
          component.component !== "skills"
            ? { gap: `2.625rem` }
            : { gap: `1rem`, marginTop: `1.6rem` }
        }
      >
        {information}
      </div>
      <Description info={component.info} />
    </div>
  );
}
