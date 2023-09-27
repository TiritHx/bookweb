import './App.css';
import { useEffect, useState, setState } from 'react';
import Menu from './components/Menu';
import Tile from './components/Tile';

function App() {
  const [DATA, updateDATA] = useState(['']);
  const [_title, changeTitle] = useState('qwe');
  const [_src, changeSrc] = useState('tre');
  const [_rating, changeRating] = useState(0); // podączyć te 3 zmienne

  // useEffect(() => {
  //   fetch("http://localhost:3001/posts")
  //   .then(response => console.log(response))
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .then(response => updateDATA(response))
  //   .then(x => console.log(DATA))
  //  .catch(error => console.log(error))
  // }, []);

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
  
  return (
    <div>
      <Menu />
      <div className='container'> 
        {DATA.map((x) => <Tile title={x.title} src={x.src} rating={x.rating} key={x.id} />)}
        <button onClick={SendData}></button>
      </div>
      
    </div>
  );
}

export default App;
