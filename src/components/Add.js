import { useEffect, useState, setState, useRef } from 'react';

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

  const [_src, changeSrc] = useState(['tre'])

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
    //let radios = document.querySelectorAll('input[name="rate"]:checked')
    if(rateRef.current.checked){
      rateRef.current.value = "Liked"
      rateRefText.current.textContent = rateRef.current.value
    }else{
      rateRef.current.value = "Disliked"
      rateRefText.current.textContent = rateRef.current.value
    }
    console.log(rateRef.current.value)
    // let x = rateRef.current.map((x, index) => x.checked ? 1 : 0);
    // console.log(x);
    //let rate = []
    //radios.forEach((radio) =>{
      //rate.push(radio.value)
    //})
    //changeRating(rate)
  }
  const clickHandler = () => {
    SendData()
  }
    
  return (
    <div>
      <form id="miform">
        <p>Title:</p>
        <input id="inputuno" type="text" value={_title} onChange={changeInput}></input><br></br>
        <input id="file" name="file" type="file" accept='image/*' onChange={changeInput1}/>
        <textarea rows="10" cols="100" defaultValue="Opis książki 👨‍🦯🚣‍♀️🚴‍♀️🚴‍♀️🚴‍♀️"></textarea>
        <p>Rating:</p>
        <div className="rate">
          <div><p ref={rateRefText}></p><input type="checkbox" onChange={changerating} name="rate" ref={rateRef} /></div>
        </div>
        
        <input type="submit" onClick={clickHandler} value="OK"></input>
      </form>
    </div>
  );
}

export default Add;