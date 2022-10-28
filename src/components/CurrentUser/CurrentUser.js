import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './CurrentUser.css'

const CurrentUser = ({ isClosed, className = '' }) => {
  const { currentUser: { email }, setLoggedIn } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const classNames = `current-user ${className}`;

  const onLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/sign-in');
  }
  return (
    <div className={classNames}>
      <p className="current-user__email">{email}</p>
      <button
        onClick={onLogout}
        className="current-user__logout" to={'/sign-in'}>Выйти</button>
    </div>
  )
}

export default CurrentUser