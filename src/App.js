import './App.css';
import { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Tile from './components/Tile';

function App() {
  const [DATA, updateDATA] = useState([]);

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
    console.log(DATA)
  }, []);
  
  return (
    <div>
      <Menu />
      <div className='container'> 
        {DATA.map((x) => <Tile title={x.title} src={x.src} rating={x.rating} key={x.id} />)}
      </div>
    </div>
  );
}

export default App;
