import { useState } from "react";
import "./Button.css";

function Button(props) {
  let [color, setColor] = useState("grey");

  function handleClick() {
    props.onClick && props.onClick();
    setColor("grey");
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;