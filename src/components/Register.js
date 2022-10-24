import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import FormInput from '../shared/FormInput/FormInput'
import FormTitle from '../shared/FormTitle/FormTitle'
import SubmitButton from '../shared/SubmitButton/SubmitButton'
import * as auth from '../utils/auth'

const Register = () => {
  const initialState = { email: '', password: '', errorMessage: '' }
  const [user, setUser] = useState(initialState);
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
    auth.register(user)
      .then((res) => {
        if (res) {
          setUser(initialState);
          navigate('/sign-in');
        } else {
          setUser({ ...user, errorMessage: 'Ошибка. Попробуйте еще раз' })
        }
      })
  }

  return (
    <div className='form'>
      <FormTitle
        className='form__title'
        inverted={true}>
        Регистрация
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
          name='password'
          type='password'
          value={user.password}
          onChange={handleChange}
          inverted={true}
        />
        <p className='form_error'>{user.errorMessage}</p>
        <SubmitButton
          className='form__btn form__btn_type_register'
          inverted={true}
        >
          Зарегистрироваться
        </SubmitButton>
      </form>
      <Link to='/sign-in'
        className='form__registered'
      >Уже зарегистрированы? Войти
      </Link>
    </div>
  )
}

export default Register