import './Card.css';
import Button from '../generic/Button/Button';
import { Link } from 'react-router-dom';

function Card({id, image, title,  description, price, onClick =() => {}}) {
   
    return (
      <Link to={`product/${id}`}className="card" onClick={() => onClick(description)}>
          <img className="card__img" alt= { 'product' } src={ image }/>
          <div className="card__box">
            <h2 className="card__title common__header">{ title } </h2>
            <p className="card__description">{ description }</p>
            <div className="card__price common__price">{ price }</div>
            <div  className="card__button">
              <Button>Buy</Button>
            </div>
          </div>
      </Link>
    )
}


export default Card;