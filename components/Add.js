import React, { useState } from "react"

function Add(props) {
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
    props.onSaveInnerData({title: input, src: null, rating: input1});
  }

  return (
    <div>
      <form id="miform">
        <p>Title:</p>
        <input id="inputuno" type="text" value={input} onChange={changeInput}></input><br></br>
        <p>Rating:</p>
        <div class="rate">
          <input type="radio" id="star10" name="rate" value="10" />
          <label for="star10" title="text">10 stars</label>
          <input type="radio" id="star9" name="rate" value="9" />
          <label for="star9" title="text">9 stars</label>
          <input type="radio" id="star8" name="rate" value="8" />
          <label for="star8" title="text">8 stars</label>
          <input type="radio" id="star7" name="rate" value="7" />
          <label for="star7" title="text">7 stars</label>
          <input type="radio" id="star6" name="rate" value="6" />
          <label for="star6" title="text">6 star</label>
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="text">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="text">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="text">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="text">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="text">1 star</label>
        </div>
        {/* <input id="inputdos" type="text" value={input1} onChange={changeInput1}></input><br></br> */}
        <input type="submit" onClick={clickHandler} value="OK"></input>
      </form>
    </div>
  );
}

export default Add;