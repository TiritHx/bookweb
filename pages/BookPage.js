import '../App.css';

function BookPage(props) {
    const { state } = props.location
    const { title, rating} = state
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{rating}</p>
        </div>
    )
}

export default BookPage;