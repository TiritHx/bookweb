import { useEffect, useState, useRef } from 'react';

function Add(props) {
  const rateRef = useRef();
  const rateRefText = useRef();


  const SendData = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title: _title, src: _src, rating: _rating})
    };
    fetch("http://localhost:3001/posts", requestOptions)
    .then(updateDATA([...DATA, {title: _title, src: _src, rating: _rating}]))
    .catch(error => console.log("error", error));    
  };

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

  const [_title, changeTitle] = useState([''])
  const changeInput = (e) => {
    changeTitle(e.target.value);
  }

  const [_src, changeSrc] = useState([''])

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
  const [_rating, changeRating] = useState(0);

  const changerating =() =>{
    if(rateRef.current.checked){
      rateRef.current.value = "👍"
      rateRefText.current.textContent = rateRef.current.value
      if(rateRef.current.checked){
        changeRating(1)
      }
    }else{
      rateRef.current.value = "👎"
      rateRefText.current.textContent = rateRef.current.value
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
      <form id="miform">
        <div className="titlebar">
          <p>Title:</p>
          <input id="inputuno" type="text" value={_title} onChange={changeInput}></input><br/>
        </div>
        <div className="discription">
          <textarea rows="10" cols="100" defaultValue="Opis książki 👨‍🦯🚣‍♀️🚴‍♀️🚴‍♀️🚴‍♀️"></textarea><br/>
          <input id="file" name="file" type="file" accept='image/*' onChange={changeInput1}/>
        </div>
        <div className="rate">
          <p>Rating:</p>
          <div><p ref={rateRefText}></p><input type="checkbox" onChange={changerating} name="rate" ref={rateRef} /></div>
          <input type="submit" onClick={clickHandler} value="OK"></input>
        </div>
      </form>
      <div className="border tile test" style={{textAlign:'center'}}>
        <p>{_title}</p>
        <img src={_src} className='imagetest' alt=''></img>
        <p>{_rating}</p>
      </div>
    </div>
  );
}

export default Add;