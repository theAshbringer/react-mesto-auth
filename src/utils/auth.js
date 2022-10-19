export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = ({ password, email }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      else
        return Promise.reject(res);
    })
    .then((res) => res)
    .catch((err) => console.log(err))
}

export const authorize = ({ password, email }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      else
        return Promise.reject(res);
    })
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token)
        return res;
      } else {
        return;
      }
    })
    .catch((err) => console.log(err))
}