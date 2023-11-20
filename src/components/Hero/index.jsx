import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./index.scss";

export default function Hero() {
  return (
    <div className="Hero">
      <h1>American Food</h1>
      <h2>The Best Taste Food</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit praesent,
        malesuada phasellus dapibus aptent per eros.
      </p>
      <div className="buttongroup">
            <button>Order Now</button>
            <button><FaLongArrowAltLeft /> </button>
      </div>
    </div>
  );
}
