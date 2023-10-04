import '../App.css';
import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Tile from '../components/Tile';

function App() {
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
  
  return (
    <div>
      <Menu />
      <div className='container'> 
        {DATA.map((x, index) => <Tile title={x.title} src={x.src == undefined ? '' : x.src} rating={x.rating} key={index} />)}
      </div>
    </div>
  );
}

export default App;