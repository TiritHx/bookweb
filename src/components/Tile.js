import React from "react";
import noimage from "../images/noimage.jpg";
import { useNavigate } from "react-router-dom";

function Tile(props) {
  const src = props.src === '' ? noimage : (props.src === null ? noimage : props.src);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(props.title, {state: props});
  }
  return (
    <div className="border tile" onClick={handleClick}>
      <p>{props.title === undefined ? props.title : (props.title.length > 24 ? props.title.substring(0, 19)+"..." : props.title)}</p>
      <img src={src} alt="placeholder" />
      <p>{props.rating === 0 ? "Niepolecane 👎" : (props.rating === 1 ? "Polecane 👍" : "Brak ocen")}</p>
    </div>
  );
}

export default Tile;