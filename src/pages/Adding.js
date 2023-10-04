import '../App.css';
import Menu from '../components/Menu';
import Tile from '../components/Tile';
import Add from '../components/Add'
import { useEffect, useState, setState } from 'react';


function Adding() {
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
            <Add />
            <div className='container'>
            {DATA.map((x, index) => <Tile title={x.title} src={x.src == undefined ? '' : x.src} rating={x.rating} key={index} />)}
                <button onClick={SendData}></button>
            </div>
        </div>
    )
}

export default Adding;