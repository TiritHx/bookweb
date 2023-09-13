import React, { useState } from "react"

function Add(props) {
  const [data, setdata] = useState([])
  const [input, setinput] = useState([])
  const changeInput = (e) => {
    setinput(e.target.value);
  }
  const [input1, setinput1] = useState([])
  const changeInput1 = (e) => {
    setinput1(e.target.value);
  }
  const clickHandler = (e) => {
    e.preventDefault();
    setdata({title: input,
             src: 'images/noimage.jpg',
             rating: input1})
    props.onSaveInnerData(data);
  }

  return (
    <div>
      <form>
        <input type="text" value={input} onChange={changeInput}></input><br></br>
        <input type="text" value={input1} onChange={changeInput1}></input><br></br>
        <input type="submit" onClick={clickHandler} value="OK"></input>
      </form>
    </div>
  );
}

export default Add;