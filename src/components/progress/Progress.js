import React from "react";

const Progress = ({ obj }) => {
  return (
    <div className="progress-item">
      <div className="progress-bar-title">{obj.title}</div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{
            width: `${obj.value}%`,
            background: obj.fill,
          }}
        >
          <div
            className="progress-bar-dot "
            style={{ background: obj.dotfill, boxShadow: obj.shadow }}
          >
            <div className="dot-img">
              <img src={obj.img} alt={obj.img}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
