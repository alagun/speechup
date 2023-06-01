import React, { useState } from "react";
import { IDescription } from "../../interface/descriptionObj";

interface IDescriptionProps {
  info: IDescription
}

const Skills = (props:IDescriptionProps) => {
  const perem:number = props.info.value;
  const k:number = 23 / 18;
  const r:number = 139;
  const x:number = +Math.cos((Math.PI * k * perem) / 100).toFixed(5);
  const y:number = +Math.sin((Math.PI * k * perem) / 100).toFixed(5);

  return (
    <div className="progress-item border">
      <div className="left-side">
        <div className="progress-bar-result">
          <span style={{ color: props.info.fill }}>{props.info.result}</span>
        </div>
        <div className="progress-bar-circle">
          <div className="percent" style={{}}>
            <svg viewBox="0 0 160 160">
              <circle
                cx={80}
                cy={75}
                r={61}
                style={{
                  stroke: `#ADB9D4`,
                  strokeDasharray: 440,
                  strokeDashoffset: 440 - 440 + r + 56,
                }}
              ></circle>
              <circle
                cx={19 + 61 + 61 * +Math.cos(Math.PI * k).toFixed(5)}
                cy={14 + 61 + 61 * +Math.sin(Math.PI * k).toFixed(5)}
                r={0.1}
                style={{
                  stroke: `#ADB9D4`,
                  zIndex: 1000,
                }}
              ></circle>
              <circle
                cx={80}
                cy={75}
                r={61}
                style={{
                  stroke: `${props.info.fill}`,
                  strokeDasharray: 440,
                  strokeDashoffset: 440 - ((440 - 56 - r) * perem) / 100,
                  filter: `drop-shadow(${props.info.shadow})`,
                }}
              ></circle>
              <circle
                cx={19 + 61 + 61 * x}
                cy={14 + 61 + 61 * y}
                r={2.5}
                style={{
                  stroke: `${props.info.fill}`,
                  zIndex: 1000,
                  filter: `drop-shadow(${props.info.shadow})`,
                }}
              ></circle>
              <circle
                cx={141}
                cy={75}
                r={0.1}
                style={{
                  stroke: `${props.info.fill}`,
                  zIndex: 1000,
                  filter: `drop-shadow(${props.info.shadow})`,
                }}
              ></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-content">
          <div className="right-side-content-title">{props.info.title}</div>
          <span className="right-side-content-text">{props.info.subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
