import './App.css';
import { useEffect } from 'react';
import Menu from './components/Menu';
import Tile from './components/Tile';
const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));

function App() {

  const DownloadSource = (url) => {
  useEffect(() => {
    fetch(url)
    .then(response => response.blob())
    .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
    console.log(reader);
    return reader;
    }))
   .catch(error => console.log(error))
  }, []);
  } 
  
  let DATA = [{title: "Yasuo", src: null, rating: 5.8},{title: "The Book", src: null, rating: 9.9},{title: "HELP", src: null, rating: 1.3},{title: "Książka", src: null, rating: 6.0},{title: "Treny Kochanowskiego", src: null, rating: 4.3},{title: "Bruh", src: null, rating: 10},{title: "MHM", src: null, rating: 7.6},{title: "Fallout", src: null, rating: 7.6},{title: "XD", src: null, rating: 2.2},{title: "Niew wiem", src: null, rating: 8.1},{title: "777", src: null, rating: 7.7},{title: "AMONGUS", src: null, rating: 6.9},{title: "The ZAZA", src: null, rating: 4.2},{title: "Żubr", src: null, rating: 5.3},{title: "Shadow Wizard Money Gang", src: null, rating: 9.6},{title: "Shadow Goverment", src: null, rating: 3.8},{title: "We love casting spells", src: null, rating: 9.9},{title: "Fucking idk", src: null, rating: 6.9},{title: "Książka", src: null, rating: 6.0},{title: "Treny Kochanowskiego", src: null, rating: 4.3},{title: "Bruh", src: null, rating: 10},{title: "MHM", src: null, rating: 7.6},{title: "Fallout", src: null, rating: 7.6},{title: "XD", src: null, rating: 2.2},{title: "Niew wiem", src: null, rating: 8.1},{title: "777", src: null, rating: 7.7},{title: "AMONGUS", src: null, rating: 6.9},{title: "The ZAZA", src: null, rating: 4.2},{title: "Żubr", src: null, rating: 5.3},{title: "Shadow Wizard Money Gang", src: null, rating: 9.6},{title: "Shadow Goverment", src: null, rating: 3.8},{title: "We love casting spells", src: null, rating: 9.9},{title: "Fucking idk", src: null, rating: 6.9}];
  imageList.map((image, index) => DATA[index].src = image);
  return (// jak nie zadziała to x.url wraca do mapa
    <div>
      <Menu />
      <div className='container'> 
        {DATA.map((x, index) => <Tile title={x.title} src={DownloadSource(`http://192.168.1.114:8080/cover1.jpg`)} rating={x.rating} key={index} />)}
      </div>
    </div>
  );
}

export default App;
