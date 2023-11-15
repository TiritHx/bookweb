import React from "react";
import noimage from "../images/noimage.jpg";
import { Link } from "react-router-dom";

function Tile(props) {
  const src = props.src.includes("data:image/") ? props.src : noimage
  const data = { title: props.title, rating: props.rating}
  return (
    <div className="border tile">
      <p>{props.title}</p>
      <Link to={{ pathname: props.title, state: data}} >
        <img src={props.src} alt="placeholder" />
      </Link>
      <p>{props.rating} / 10</p>
    </div>
  );
}

export default Tile;