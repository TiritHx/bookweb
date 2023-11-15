import React from "react";
import noimage from "../images/noimage.jpg";

function Tile(props) {
  const src = props.src === '' ? noimage : (props.src === null ? noimage : props.src);
  return (
    <div className="border tile">
      <p>{props.title}</p>
      <img src={src} alt="placeholder" />
      <p>{props.rating === 1 ? "Polecane 👍" : (props.rating === 0 ? "Niepolecane 👎" : "Brak ocen")}</p>
    </div>
  );
}

export default Tile;