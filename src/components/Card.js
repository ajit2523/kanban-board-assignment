import './Card.css';

const Card = (props) =>{
    return (
        <div className="card">
            <div>{props.title}</div>
        </div>
    )
}

export default Card;