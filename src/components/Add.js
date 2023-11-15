import { useEffect, useState, useRef } from 'react';
import Tile from './Tile'

function Add(props) {
  const rateRef = useRef();
  const rateRefText = useRef();

  const noDo = (e) => {
    e.preventDefault();
  }

  const [DATA, updateDATA] = useState(['']);
    
      const getData = () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        fetch("http://localhost:3001/posts", requestOptions)
          .then((response) => response.json())
          .then((result) => updateDATA(result))
          .catch((error) => console.log("error", error));
      };
    
      useEffect(() => {
        getData();
      }, []);

  const SendData = (e) => {
    if(_title === ''){
      alert("Podaj tytuł książki!")
    }else{
      let fladze = false
      for(var i = 0; i < DATA.length;i++){
        if(DATA[i].title === _title){
          fladze = true
          console.log(fladze)
        }
      }
      if(!fladze){
        var requestOptions = {
          method: "POST",
          redirect: "follow",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({title: _title, src: _src, rating: _rating})
        };
        fetch("http://localhost:3001/posts", requestOptions)
        .then(updateDATA([...DATA, {title: _title, src: _src, rating: _rating}]))
        .catch(error => console.log("error", error)); //nigger?????🆖🈁🆖🆖🆖🆖🆖🆖🆗🆗🆗🚮
      }else{
        alert("Recenzja tej książki już istniejex 🆖")
      }
    }
  };

  

  const [_title, changeTitle] = useState('')
  const changeInput = (e) => {
    changeTitle(e.target.value);
  }

  const [_src, changeSrc] = useState('')

  const convertImage = (imageFile) => { //it works
    const reader = new FileReader();

    reader.onload = (e) => {
      const dataURL = e.target.result;
      changeSrc(dataURL);
    };

    reader.readAsDataURL(imageFile);
  };

  const changeInput1 = (e) => {
    const image = e.target.files[0]
    convertImage(image);
  }
  const [_rating, changeRating] = useState(2);

  const changerating =() =>{
    if(rateRef.current.checked){
      rateRefText.current.textContent = "👍"
      if(rateRef.current.checked){
        changeRating(1)
      }
    }else{
      rateRefText.current.textContent = "👎"
      if(!rateRef.current.checked){
        changeRating(0)
      }
    }
  }
  const clickHandler = () => {
    SendData()
  }
    
  return (
    <div>
      <form id="miform" onSubmit={noDo}>
        <div className="titlebar">
          <p>Title:</p>
          <input id="inputuno" type="text" value={_title} onChange={changeInput}></input><br/>
        </div>
        <div>
          <textarea rows="10" cols="100" placeholder="Opis książki 👨‍🦯🚣‍♀️🚴‍♀️🚴‍♀️🚴‍♀️"></textarea><br/>
          <label className='custom-input'>
            <p>Wybierz plik</p>
            <input id="file" name="file" type="file" accept='image/*' onChange={changeInput1}/>
          </label>
          <div className="rate">
          <p>Rating:</p>
          <div>
            <label className='custom-label'>
              <p className='custom-like' ref={rateRefText}>👍</p>
              <input type="checkbox" className='like' onChange={changerating} name="rate" ref={rateRef} ></input>
            </label>
          </div>
          <input type="submit" onClick={clickHandler} value="OK"></input>
        </div>
        </div>
      </form>
      <div>
        <div>
          <Tile title={_title === '' ? "Placeholder" : _title} src={_src === undefined ? '' : _src} rating={_rating} />
        </div>
        <p className='overview'>Overview</p>
      </div>
    </div>
  );
}

export default Add;