import React from 'react';
import deleteButton from '../images/корзина.svg';

function Card(props) {
    const card = props.card;
    const handleCardClick = () => {
        props.onCardClick(card);
    };
    return (
       // <template className="card-template">
        <li className="card">
            <img src={card.link} alt={card.name} className="card__image"
                onClick={handleCardClick} />
            <div className="card__mask-group">
                <h3 className="card__title"> {card.name}</h3>
                <button type="button" src={deleteButton} className="card__delete-button"
                    title="Удалить карточку"></button>
                <div className="place__likes">
                    <button type="button" className="card__like-button" title="Лайк"></button>
                    <span className="card__likes-number">{card.likes.length}</span>
                </div>
            </div>
        </li>
        // </template>
    );
}

export default Card;

