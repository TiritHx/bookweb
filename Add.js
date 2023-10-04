import { useEffect, useState, setState } from 'react';

function Add(props) {

  const SendData = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title: _title, src: _src, rating: _rating})
    };
    console.log(requestOptions);
    console.log('wcisłem');
    fetch("http://localhost:3001/posts", requestOptions)
    .then(updateDATA([...DATA, {title: _title, src: _src, rating: _rating}]))
    .then(console.log(DATA))
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
          .then(console.log(DATA))
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
  const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');
  const changeInput1 = (e) => {  //jescze nie dziala
    const image = e.target.files[0]
    console.log(image)
    fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                console.log(reader.result);
                changeSrc(reader.result);
                // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

                // Convert to Base64 string
                const base64 = getBase64StringFromDataURL(reader.result);
                console.log(base64);
                // Logs wL2dvYWwgbW9yZ...
            };
            reader.readAsDataURL(blob);
        });
  }
  const [_rating, changeRating] = useState(0);
  const changerating =() =>{
    let radios = document.querySelectorAll('input[name="rate"]:checked')
    let rate = []
    radios.forEach((radio) =>{
      rate.push(radio.value)
    })
    changeRating(rate)
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
        <p>Rating:</p>
        <div class="rate">
          {[...Array(10)].map((_, x) => <><input type="radio" onChange={changerating} id={"star" + (10 - x)} name="rate" value={10 - x} /><label for={"star" + (10-x)} title="text"></label></>)}
        </div>
        <input type="submit" onClick={clickHandler} value="OK"></input>
      </form>
    </div>
  );
}

export default Add;