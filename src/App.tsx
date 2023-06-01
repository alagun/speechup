import React, { useState } from "react";
import Group from "./components/group/Group";

function App() {
  let [component2, setComponent2] = useState({
    component: "skills",
    title: "Немонотонность",
    subtitle: "Уровни параметров немонотонности",
    info: [
      {
        title: "Темп речи",
        fill: "#2477F4",
        dotfill: "#2477F4",
        shadow: "0.663492px 0.663492px 3.4619px #2477F4",
        img: "",
        value: 55,
      },
      {
        title: "Громкость голоса",
        fill: "#F35B60",
        dotfill: "#F35B60",
        img: "",
        shadow: "0.663492px 0.663492px 3.4619px #F35B60",
        value: 90,
      },
      {
        title: "Тон речи",
        fill: "#37476A",
        dotfill: "#37476A",
        img: "",
        shadow: "0.663492px 0.663492px 3.4619px #37476A",
        value: 15,
      },
    ],
  });
  let [component1, setComponent1] = useState({
    component: "progress",
    title: "Оригинальность, заимствования и цитирование",
    subtitle: "Отношение параметров относительно общего объема текста.",
    info: [
      {
        title: "Оригинальность",
        fill: "linear-gradient(212.08deg, #7C8EB5 0%, #37476A 100%)",
        dotfill: "linear-gradient(301.36deg, #7C8EB5 -30.27%, #37476A 119.56%)",
        shadow: "",
        img: "./img/lamp-on.svg",
        value: 30,
      },
      {
        title: "Заимствования",
        fill: "linear-gradient(32.08deg, #2477F4 0%, #3A86FA 100%)",
        dotfill: "linear-gradient(32.08deg, #2477F4 0%, #3A86FA 100%)",
        img: "./img/smallcaps.svg",
        shadow: "-2px 2px 12px rgba(12, 79, 180, 0.45)",
        value: 87.4,
      },
      {
        title: "Цитирование",
        fill: "linear-gradient(225deg, #FFB800 0%, #FFB800 0.01%, #FF9900 100%)",
        dotfill: "#FFAA00",
        img: "./img/quote-down-square.svg",
        shadow: "-2px 2px 12px rgba(219, 153, 20, 0.6)",
        value: 66,
      },
    ],
  });
  return (
    <div className="wrapper">
      <Group component={component2} />
      <Group component={component1} />
    </div>
  );
}

export default App;
