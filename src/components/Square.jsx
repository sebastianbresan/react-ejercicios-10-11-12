import React, { useState } from "react";

const Square = () => {
  const [color, setColor] = useState("RGB(0,0,0)");

  const [intervalId, setIntervalId] = useState(0);

  function interval() {
    let newIntervalId = setInterval(() => {
      mouseMove();
    }, 1000);
    setIntervalId(newIntervalId);
  }
  function stopInterval() {
    clearInterval(intervalId);
    setIntervalId(0);
  }

  const mouseMove = () => {
    setColor(
      `RGB(
        ${Math.random() * (255 - 0)}, 
        ${Math.random() * (255 - 0)}, 
        ${Math.random() * (255 - 0)}`
    );
  };

  const style = {
    width: "255px",
    height: "255px",
    backgroundColor: color,
  };

  return (
    <div>
      <div
        style={style}
        onMouseEnter={interval}
        onMouseLeave={stopInterval}
        onDoubleClick={stopInterval}
      ></div>
    </div>
  );
};

export default Square;
