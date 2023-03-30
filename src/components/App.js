
import React from 'react';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
<div className="page">
<Header/>
    <main>
        <section className="profile">
            <div className="profile__avatar-container">
            <button className="profile__avatar-button"></button>
             <img className="profile__avatar" src="<%=require('./images/ava-Краснодар.jpg')%>" alt="картика Краснодар Аврора"   name="avatar" />
            </div>
             <div className="profile__info">
                <h1 className="profile__title">Краснодар</h1>
                <button type="button" className="profile__edit-button"></button>
                <p className="profile__subtitle">Любимый край</p>
            </div>
            <button type="button" className="profile__add-button"></button>
        </section>
        <section className="elements">
            <ul className="elements__container"></ul>
        </section>
    </main>
    <Footer/>
    <div className="popup popup_edit">
        <div className="popup__content">
            <button className="popup__close-button" type="button"></button>
            <h3 className="popup__header">Редактировать профиль</h3>
            <form className="popup__info popup__info_profile" name="popupProfile" novalidate>
                <input type="text" className="popup__input popup__input_user_name" name="name" id="user-name"
                    placeholder="Краснодар" minlength="2" maxlength="40" required/>
                <span className="popup__input-error" id="user-name-error"></span>
                <input type="text" className="popup__input popup__input_user_about" name="description" id="about-user"
                    placeholder="Любимый край" minlength="2" maxlength="40" required/>
                <span className="popup__input-error" id="about-user-error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
            </form>
        </div>
    </div>
    <div className="popup popup_new-card">
        <div className="popup__content">
            <button className="popup__close-button" type="button" name="closeAddButton"></button>
            <h3 className="popup__header">Новое место</h3>
            <form className="popup__info popup__info_new-card" name="popupAddForm" novalidate>
                <input type="text" className="popup__input popup__input_plase-name" name="name" id="plase-name"
                    placeholder="Название" minlength="2" maxlength="40" required/>
                <span className="popup__input-error" id="plase-name-error"></span>
                <input type="url" className="popup__input popup__input_link-images" name="link" id="url-images"
                    placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error" id="url-images-error"></span>
                <button className="popup__submit-button" type="submit">Создать</button>
            </form>
        </div>
    </div>
    <div className="popup popup_image">
        <div className="popup__image-content">
            <button className="popup__close-button" type="button" name="closeImg"></button>
            <figure className="popup__figure">
                <img src="#" alt="" className="popup__figure-image"/>
                <figcaption className="popup__figure-caption"></figcaption>
            </figure>
        </div>
    </div>
    <div className="popup popup_delete-card">
        <div className="popup__content">
            <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Вы уверены?</h3>
            <form className="popup__info popup__delete-form" action="#" name="delete-form" novalidate>
                <button className="popup__submit-button" type="submit">да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_avatar">
        <div className="popup__content">
            <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__info popup__info_avatar" name="avatarForm" action="#"  novalidate>
              <input type="url" className="popup__input popup__input-avatar"  name="avatar"  id="avatar"
              placeholder="Ссылка на картинку" required/>
              <span id="avatar-error" className="popup__input-error"></span>
              <button className="popup__submit-button" type="submit"> Сохранить</button>
          </form>
        </div>
      </div>
    <template className="card-template">
        <li className="card">
            <img className="card__image" alt="" src="#"/>
            <div className="card__mask-group">
                <h3 className="card__title"></h3>
                <button type="button" className="card__delete-button" title="Удалить карточку"></button>
             <div className="place__likes">
                <button type="button" className="card__like-button" title="Лайк"></button>
                <span className="card__likes-number"></span>
            </div>
            </div>
        </li>
    </template>
</div>

  );
}

export default App;
