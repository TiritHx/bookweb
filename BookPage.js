import '../App.css';
import noimage from "../images/noimage.jpg";
import { useLocation } from "react-router-dom";

function BookPage() {
    const { state } = useLocation()
 
    return (
        <div className='book'>
            <div className='book-title'>
                <h1>
                    {state.title === undefined ? state.title : (state.title.length > 24 ? state.title.substring(0, 19)+"..." : state.title)}
                </h1>
                <p>{state.rating === 0 ? "Niepolecane 👎" : (state.rating === 1 ? "Polecane 👍" : "Brak ocen")}</p>
                <p>{state.description}</p>
            </div>
            <div className='book-image'>
                <img src={state.src === '' ? noimage : (state.src === null ? noimage : state.src)} alt='placeholder' />
            </div>
        </div>
    )
}

export default BookPage;