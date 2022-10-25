import React from 'react'
import Popup from '../Popup'
import { ReactComponent as SuccessLogo } from '../../images/success.svg'
import { ReactComponent as FailLogo } from '../../images/fail.svg'
import './InfoTooltip.css'
import CloseButton from '../CloseButton'

const InfoTooltip = ({ successful, isOpen, onClose }) => {
  const popupClass = isOpen ? 'popup_opened' : '';
  return (
    <Popup className={popupClass} onClose={onClose}>
      <div className='info-popup popup__container'>
        <div className='info-popup__logo'>
          {successful ? <SuccessLogo /> : <FailLogo />}</div>
        <h2 className='info-popup__title'>
          {successful ?
            'Вы успешно зарегистрировались!'
            :
            'Что-то пошло не так! Попробуйте ещё раз.'
          }
        </h2>
        <CloseButton onClose={onClose} />
      </div>
    </Popup>
  )
}

export default InfoTooltip