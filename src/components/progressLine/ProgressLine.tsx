import React from "react";
import { IDescription } from "../../interface/descriptionObj";


interface IDescriptionProps {
  info: IDescription
}

export default function ProgressLine(props:IDescriptionProps){
  return (
    <div className="progress-item">
      <div className="progress-bar-title">{props.info.title}</div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{
            width: `${props.info.value}%`,
            background: props.info.fill,
          }}
        >
          <div
            className="progress-bar-dot "
            style={{
              background: props.info.dotfill,
              boxShadow: props.info.shadow,
            }}
          >
            <div className="dot-img">
              <img src={props.info.img} alt={props.info.img}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

