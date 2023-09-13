import './App.css';
import Menu from './components/Menu';
import Tile from './components/Tile';
import Add from './Add'
import React, { useState } from "react"

function App() {
  const onSaveInnerDataHandler = (enteredData) => {
    console.log(enteredData);
    setData((prevState) => [...prevState, enteredData])
  }

  const [DATA, setData] = useState([{title: "tytuł", src: "./mhm", rating: 5.8},{title: "ksiąszka", src: null, rating: 9.9}]);
  
  return (
    <div>
      <Menu />
      <Add onSaveInnerData = {onSaveInnerDataHandler} />
      {DATA.map(x => <Tile title={x.title} src={x.src} rating={x.rating} />)}
    </div>
  );
}

export default App;
