import './App.css';
import Menu from './components/Menu';
import Tile from './components/Tile';

function App() {
  const DATA = [{title: "tytuł", src: null, rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9},{title: "tytuł", src: null, rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9},{title: "tytuł", src: null, rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9},{title: "tytuł", src: null, rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9},{title: "tytuł", src: null, rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9},];
  return (
    <div>
      <Menu />
      <div className='container'>
        {DATA.map(x => <Tile title={x.title} src={x.src} rating={x.rating} />)}
      </div>
    </div>
  );
}

export default App;
