export const BASE_URL = 'https://auth.nomoreparties.co';

const handleResponse = (res) => {
  if (res.ok) {
    const json = res.json();
    if (json) {
      return json;
    }
  }
  return Promise.reject(res);
}

export const register = ({ password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => handleResponse(res))
}

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => handleResponse(res))
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((res) => handleResponse(res))
}
