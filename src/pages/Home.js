import { useState, useEffect } from 'react';
import '../App.css';
import Menu from '../components/Menu';
import Tile from '../components/Tile';

function App() {
  const [DATA, updateDATA] = useState(['']);
  const [_title, changeTitle] = useState('qwe');
  const [_src, changeSrc] = useState('tre');
  const [_rating, changeRating] = useState(0); // podączyć te 3 zmienne

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

  const SendData = () => { // funkcja do wysyłania rzeczy do dazy banych, nadpisuje całą daze banych, maybe to potem zmienie ¯\_(ツ)_/¯
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
  
  return (
    <div>
      <Menu /> 
      <div className='container'> 
        {DATA.map((x, index) => <Tile title={x.title} src={x.src === undefined ? '' : x.src} rating={x.rating} key={index} />)}
        <button style={{display: "none"}} onClick={SendData}></button> 
        {/* ten guzior ma moc wysyłania rzeczy do dazy banych, używać z rozwagą, może nadpisać całą daze banych */}
      </div>
      
    </div>
  );
}

export default App;