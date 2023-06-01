import React, { useState } from "react";

const Skills = ({ obj }) => {
  let perem = obj.value;
  let k = 23 / 18;
  let r = 139;
  let x = +Math.cos((Math.PI * k * perem) / 100).toFixed(5);
  let y = +Math.sin((Math.PI * k * perem) / 100).toFixed(5);

  const [paceType, setPaceType] = useState("");
  const [volumeType, setVolumeType] = useState("");
  const [toneType, setToneType] = useState("");

  React.useEffect(() => {
    if (obj.value < 35) {
      if (obj.title === "Темп речи") {
        setPaceType({
          state: "медленно",
          description: "Ваш темп речи слишком медленный.",
        });
      } else if (obj.title === "Громкость голоса") {
        setVolumeType({
          state: "Слишком тихо",
          description: "Зафиксирована пониженная громкость голоса.",
        });
      } else if (obj.title === "Тон речи") {
        setToneType({
          state: "Низкий",
          description: "Ваш тон речи слишком низкий.",
        });
      }
    } else if (obj.value >= 35 && obj.value < 65) {
      if (obj.title === "Темп речи") {
        setPaceType({
          state: "норма",
          description: "Ваш темп речи стабильный и динамичный.",
        });
      } else if (obj.title === "Громкость голоса") {
        setVolumeType({
          state: "норма",
          description: "Звуковысотность, интонация, громкость голоса в норме.",
        });
      } else if (obj.title === "Тон речи") {
        setToneType({
          state: "норма",
          description: "Ваш тон речи нормальный.",
        });
      }
    } else if (obj.value >= 65) {
      if (obj.title === "Темп речи") {
        setPaceType({
          state: "быстро",
          description: "Ваш темп речи слишком быстрый.",
        });
      } else if (obj.title === "Громкость голоса") {
        setVolumeType({
          state: "слишком громко",
          description: "Зафиксирована повышенная громкость голоса.",
        });
      } else if (obj.title === "Тон речи") {
        setToneType({
          state: "высокий",
          description: "Ваш тон речи слишком высокий.",
        });
      }
    }
  }, [obj.title, obj.value]);

  const states = () => {
    if (obj.title === "Темп речи") {
      return paceType.state;
    } else if (obj.title === "Громкость голоса") {
      return volumeType.state;
    } else if (obj.title === "Тон речи") {
      return toneType.state;
    }
  };

  const descriptions = () => {
    if (obj.title === "Темп речи") {
      return paceType.description;
    } else if (obj.title === "Громкость голоса") {
      return volumeType.description;
    } else if (obj.title === "Тон речи") {
      return toneType.description;
    }
  };

  return (
    <div className="progress-item border">
      <div className="left-side">
        <div className="progress-bar-result">
          <span style={{ color: obj.fill }}>{states()}</span>
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
                cx={19 + 61 + 61 * +Math.cos((Math.PI * k).toFixed(5))}
                cy={14 + 61 + 61 * +Math.sin((Math.PI * k).toFixed(5))}
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
                  stroke: `${obj.fill}`,
                  strokeDasharray: 440,
                  strokeDashoffset: 440 - ((440 - 56 - r) * perem) / 100,
                  filter: `drop-shadow(${obj.shadow})`,
                }}
              ></circle>
              <circle
                cx={19 + 61 + 61 * x}
                cy={14 + 61 + 61 * y}
                r={2.5}
                style={{
                  stroke: `${obj.fill}`,
                  zIndex: 1000,
                  filter: `drop-shadow(${obj.shadow})`,
                }}
              ></circle>
              <circle
                cx={141}
                cy={75}
                r={0.1}
                style={{
                  stroke: `${obj.fill}`,
                  zIndex: 1000,
                  filter: `drop-shadow(${obj.shadow})`,
                }}
              ></circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-side-content">
          <div className="right-side-content-title">{obj.title}</div>
          <span className="right-side-content-text">{descriptions()}</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
