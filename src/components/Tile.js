import React from "react";
import noimage from "../images/noimage.jpg";

function Tile(props) {
  const src = props.src.includes("data:image/") ? props.src : noimage;
  return (
    <div className="border tile">
      <p>{props.title}</p>
      <img src={src} alt="placeholder" />
      <p>{props.rating} / 10</p>
    </div>
  );
}

export default Tile;