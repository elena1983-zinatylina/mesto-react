
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isPopupPictureOpen, setIsPopupPictureOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState([]);

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsPopupPictureOpen(true);
    };

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsPopupPictureOpen(false);
    };

    const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isPopupPictureOpen;

    React.useEffect(() => {
        function closeAllPopupsByEscape(evt) {
            if (evt.key === 'Escape') {
                closeAllPopups();
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', closeAllPopupsByEscape);
            return () => { document.removeEventListener('keydown', closeAllPopupsByEscape); }
        }
    }, [isOpen]);

    const closeAllPopupsByOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            closeAllPopups()
        }
    };

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleEditPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <PopupWithForm
                name={'profile'}
                title={'Редактировать профиль'}
                isOpen={isEditProfilePopupOpen}
                onButtonClose={closeAllPopups}
                onOverlayClose={closeAllPopupsByOverlay}
                buttonText={'Сохранить'}
            >
                <input type="text" className="popup__input popup__input_user_name"
                    name="name" id="user-name" placeholder="Имя"
                    minLength="2" maxLength="40" required />
                <span className="popup__input-error" id="user-name-error"></span>
                <input type="text" className="popup__input popup__input_user_about"
                    name="about" id="about-user" placeholder="Работа"
                    minLength="2" maxLength="40" required />
                <span className="popup__input-error" id="about-user-error"></span>

            </PopupWithForm>

            <PopupWithForm
                name={'newCard'}
                title={'Новое место'}
                isOpen={isAddPlacePopupOpen}
                onButtonClose={closeAllPopups}
                onOverlayClose={closeAllPopupsByOverlay}
                buttonText={'Создать'}
            >
               <div className="popup__input-container">
                <input type="text" className="popup__input popup__input_plase-name" name="name" id="plase-name"
                    placeholder="Название" minLength="2" maxLength="40" required />
                <span className="popup__input-error" id="plase-name-error"></span>
                </div>
                <div className="popup__input-container">
                <input type="url" className="popup__input popup__input_link-images" name="link" id="url-images"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__input-error" id="url-images-error"></span>
                </div>
            </PopupWithForm>



            <ImagePopup
                card={selectedCard}
                isOpen={isPopupPictureOpen}
                onButtonClose={closeAllPopups}
                onOverlayClose={closeAllPopupsByOverlay}
            />
          


            <PopupWithForm
                name={'avatar'}
                title={'Обновить аватар'}
                isOpen={isEditAvatarPopupOpen}
                onButtonClose={closeAllPopups}
                onOverlayClose={closeAllPopupsByOverlay}
                buttonText={'Сохранить'}
            >
                 <div className="popup__input-container">
                <input type="url" className="popup__input popup__input-avatar" name="link" id="avatar"
                    defaultValue="" placeholder="Ссылка на картинку" required />
                <span id="avatar-error" className="popup__input-error"></span>
                </div>
            </PopupWithForm>
 
 
           <PopupWithForm name={'delete'} />

        </div >

    );
}

export default App;
