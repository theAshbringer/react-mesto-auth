import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import FormInput from '../shared/FormInput/FormInput'
import FormTitle from '../shared/FormTitle/FormTitle'
import SubmitButton from '../shared/SubmitButton/SubmitButton'
import TextButton from '../shared/TextButton/TextButton'
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
          // type='email'
          value={user.email}
          setValue={handleChange}
          inverted={true}
        />
        <FormInput
          className='form__field'
          placeholder='Пароль'
          id='password'
          // type='password'
          value={user.password}
          setValue={handleChange}
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
      <TextButton
        fontSize={14}
        className='form__registered'
      >Уже зарегистрированы? Войти
      </TextButton>
    </div>
  )
}

export default Register