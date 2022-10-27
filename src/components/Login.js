import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import FormInput from '../shared/FormInput/FormInput'
import FormTitle from '../shared/FormTitle/FormTitle'
import SubmitButton from '../shared/SubmitButton/SubmitButton'
import InfoTooltip from './InfoTooltip/InfoTooltip'
import * as auth from '../utils/auth'

const Login = ({ handleLogin }) => {
  const initialState = { email: '', password: '', errorMessage: '' }
  const [user, setUser] = useState(initialState);
  const [tooltipState, setTooltipState] = useState({ isOpen: false, isSuccess: false });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      auth.authorize(user)
        .then((res) => {
          if (res.token) {
            localStorage.setItem('jwt', res.token)
            handleLogin();
            navigate('/');
            setUser(initialState);
          } else {
            return Promise.reject(res);
          }
        })
        .catch((err) =>
          setTooltipState({ isOpen: true, isSuccess: false }))
    }
  }

  const handleCloseTooltip = () => {
    setTooltipState({ ...tooltipState, isOpen: false })
  }

  return (
    <div className='form'>
      <FormTitle
        className='form__title'
        inverted={true}>
        Вход
      </FormTitle>
      <form
        onSubmit={handleSubmit}>
        <FormInput
          className='form__field'
          placeholder='Email'
          id='email'
          name='email'
          type='email'
          value={user.email}
          onChange={handleChange}
          inverted={true}
        />
        <FormInput
          className='form__field'
          placeholder='Пароль'
          id='password'
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}
          inverted={true}
        />
        <SubmitButton
          className='form__btn'
          inverted={true}
        >
          Войти
        </SubmitButton>
      </form>
      <InfoTooltip successful={tooltipState.isSuccess} onClose={handleCloseTooltip} isOpen={tooltipState.isOpen} />
    </div>
  )
}

export default Login