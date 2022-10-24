import React from 'react'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import './Header.css'

const Header = () => {
  const { email } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }

  return (
    <header className="header">
      <a href="#" className="header__logo" />
      {pathname === '/sign-up' && <Link className="header__not-logged-in" to={'/sign-in'}>Войти</Link>}
      {pathname === '/sign-in' && <Link className="header__not-logged-in" to={'/sign-up'}>Регистрация</Link>}
      {pathname === '/' && (
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