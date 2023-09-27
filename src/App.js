import './App.css';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Tile from './components/Tile';

function App() {
  const [DATA, updateDATA] = useState(['']);
  const [_title, changeTitle] = useState('qwe');
  const [_src, changeSrc] = useState('tre');
  const [_rating, changeRating] = useState(0); // podączyć te 3 zmienne

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
    .catch(error => console.log("error", error));    
  };
  
  return (
    <div>
      <Menu />
      <div className='container'> 
        {DATA.map((x, index) => <Tile title={x.title} src={x.src == undefined ? '' : x.src} rating={x.rating} key={index} />)}
        <button onClick={SendData}></button>
      </div>
      
    </div>
  );
}

export default App;
