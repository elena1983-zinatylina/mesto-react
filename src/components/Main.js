import React from 'react'
import Card from './Card.js';
import api from '../utils/Api.js'

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userSubtitle, setUserSubtitle] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then(res => {
                setUserName(res.name);
                setUserSubtitle(res.about);
                setUserAvatar(res.avatar);
            })
            .then(() => {
                api.getInitialCards()
                    .then(res => setCards(res))
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <button className="profile__avatar-button"></button>
                    <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" name="avatar" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
                    <p className="profile__subtitle">{userSubtitle}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            <section className ="elements">
                <ul className ="elements__container">
                    {cards.map((card) =>
                        <Card onCardClick={props.onCardClick} key={card._id} card={card} />
                    )}
                </ul>
            </section>
        </main>
    )
}
export default Main

