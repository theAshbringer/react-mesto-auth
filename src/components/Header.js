import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import './Header.css'

const Header = ({ location }) => {
  const { email } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }

  return (
    <header className="header">
      <a href="#" className="header__logo" />
      {location === '/sign-up' && <Link className="header__not-logged-in" to={'/sign-in'}>Войти</Link>}
      {location === '/sign-in' && <Link className="header__not-logged-in" to={'/sign-up'}>Регистрация</Link>}
      {location === '/' && (
        <>
          <div className="header__logged-in">
            <p className="header__user">{email}</p>
            <button
              onClick={onLogout}
              className="header__logout" to={'/sign-in'}>Выйти</button>
          </div>
          <div className='header__burger'></div></>
      )}
    </header>
  )
}

export default Header