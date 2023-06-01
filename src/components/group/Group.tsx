import React, { useState } from "react";
import ProgressLine from "../progressLine/ProgressLine";
import Skills from "../progressCircle/ProgressCircle";
import Description from "../description/Description";
import { IComponents } from "../../models";
import { IDescription } from "../description/descriptionObj";

interface IComponentProps {
  component: IComponents
}

export default function Group(props:IComponentProps) {
  let information:JSX.Element[];
  if (props.component.component !== "skills") {
    information = props.component.info.map((el:IDescription, index:number) => (
      <ProgressLine key={index} info={el} />
    ));
  } else {
    information = props.component.info.map((el:IDescription, index:number) => (
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
  console.log(props.component.info)
  return (
    <div
      className={`section${
        props.component.component !== "skills"
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
        <span>{props.component.title}</span>
      </div>
      <div className="section__subtitle">
        <span>{props.component.subtitle}</span>
      </div>
      <div
        className="stats"
        style={
          props.component.component !== "skills"
            ? { gap: `2.625rem` }
            : { gap: `1rem`, marginTop: `1.6rem` }
        }
      >
        {information}
      </div>
      <Description info={props.component.info} />
    </div>
  );
}
