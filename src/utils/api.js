import {
  authToken,
  baseUrl
} from './constants'

class Api {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка!: ${res.status}`);
    }
    return res.json();
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._handleResponse(res));
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}cards/${id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  loadUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  postCard(body) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: {
        authorization: this._authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => this._handleResponse(res));
  }

  updateUserInfo({ name, description }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        about: description,
      }),
    }).then((res) => this._handleResponse(res));
  }
}

const api = new Api({ baseUrl, authToken });

export default api;