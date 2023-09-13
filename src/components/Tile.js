import React from "react";
import noimage from "../images/noimage.jpg";

function Tile(props) {
  const src = props.src === null ? noimage : props.src;
  return (
    <div className="border tile">
      <p>{props.title}</p>
      <img src={src} alt="placeholder" />
      <p>{props.rating}</p>
    </div>
  );
}

export default Tile;