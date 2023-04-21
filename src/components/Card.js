import React from 'react';
import deleteButton from '../images/корзина.svg';
import { CurrentUserContext } from "../contexts/CurrentUserContext";



const Card  = (props) => {
    const currentUser = React.useContext(CurrentUserContext);
    const card = props.card;
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `card__like-button ${
        isLiked ? "card__like-button_active" : ""
      }`;
     const cardDeleteButtonClassName = `card__delete-button ${
        isOwn ? "card__delete-button_active" : ""
     }`;
    const handleCardClick = () => {
        props.onCardClick(card);
    };

    const handleLikeClick = () => {
        props.onLikeClick(card);
    }

    const handleDeleteClick = () => {
        props.onDeleteClick(card);
    }
    return (
        
       

        <li className="card">
                <img
                    src={card.link}
                    alt={card.name}
                    className="card__image"
                    onClick={handleCardClick}
                />
           
            <div className="card__mask-group">
                <h3 className="card__title">
                    {card.name}
                </h3>
                {<button
                    type="button"
                    src={deleteButton}
                    className={cardDeleteButtonClassName}
                    onClick={handleDeleteClick}
                    alt="Кнопка удалить карточку">
                    </button>
                     
                }
                <div className="place__likes">
                    <button
                        type="button"
                        className={cardLikeButtonClassName}
                        onClick={handleLikeClick}
                        title="Лайк">
                    </button>
                    <span className="card__likes-number">
                        {card.likes.length}
                    </span>
                </div>
            </div>
        </li>
       
    );
}

export default Card;

