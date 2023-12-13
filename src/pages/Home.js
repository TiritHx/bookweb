import { useState, useEffect } from 'react';
import '../App.css';
import Tile from '../components/Tile';

function App() {
  const [DATA, updateDATA] = useState(['']);

  const getData = () => { // funkcja do pobiernia rzeczy z dazy banych
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
  
  return (
    <div>
      <div className='container'> 
      {DATA.map((x, index) => <Tile title={x.title} src={x.src === undefined ? '' : x.src} rating={x.rating} description={x.description} key={index} />)}
      </div>
      
    </div>
  );
}

export default App;