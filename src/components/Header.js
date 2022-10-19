import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import './Header.css'

const Header = ({ location }) => {
  const { email } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <a href="#" className="header__logo" />
      {location === '/sign-up' && <Link className="header__not-logged-in" to={'/sign-in'}>Войти</Link>}
      {location === '/sign-in' && <Link className="header__not-logged-in" to={'/sign-up'}>Регистрация</Link>}
      {location === '/' && (
        <>
          <div className="header__logged-in">
            <p className="header__user">{email}</p>
            <Link className="header__logout" to={'/sign-in'}>Выйти</Link>
          </div>
          <div className='header__burger'></div></>
      )}
    </header>
  )
}

export default Header