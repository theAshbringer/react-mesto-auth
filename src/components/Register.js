import React, { useState } from 'react'
import FormInput from '../shared/FormInput/FormInput'
import FormTitle from '../shared/FormTitle/FormTitle'
import SubmitButton from '../shared/SubmitButton/SubmitButton'
import TextButton from '../shared/TextButton/TextButton'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='form'>
      <FormTitle
        className='form__title'
        inverted={true}>
        Регистрация
      </FormTitle>
      <form>
        <FormInput
          className='form__field'
          placeholder='Email'
          id='email'
          value={email}
          setValue={setEmail}
          inverted={true}
        />
        <FormInput
          className='form__field'
          placeholder='Пароль'
          id='login-password'
          value={password}
          setValue={setPassword}
          inverted={true}
        />
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