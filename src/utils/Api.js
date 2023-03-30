 class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl
      this._headers = options.headers
    }
  
    _validateQuery(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  
    // карточеки с сервера
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
        .then(res => this._validateQuery(res));
    }
  
    // новые карточки 
    addCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      })
        .then(res => this._validateQuery(res));
    }
  
    // Удаление карточки
    handleDeleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
        .then(res => this._validateQuery(res));
    }
  
    // лайк 
    setLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: this._headers
      })
        .then(res => this._validateQuery(res));
    }
  
    // Удаляем лайк
    deleteLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: this._headers
      })
        .then(res => this._validateQuery(res));
    }
  
    // информация о пользователе
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
        .then(res => this._validateQuery(res));
    }
  
    // Редактирование информации о пользователе 
    editUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.description
        })
      })
        .then(res => this._validateQuery(res));
    }
  
    // Редактирование аватара пользователя через попап
    updAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar
        })
      })
        .then(res => this._validateQuery(res));
    };
  }
  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
    headers: {
      authorization:  'dbb1bb43-1b72-40d9-a456-fa264cdb846f',
      'Content-Type': 'application/json'
    }
  });
  
  export default api;
  