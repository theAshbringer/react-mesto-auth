import React, { useState } from 'react'
import FormInput from '../shared/FormInput/FormInput'
import FormTitle from '../shared/FormTitle/FormTitle'
import SubmitButton from '../shared/SubmitButton/SubmitButton'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form'>
      <FormTitle
        className='form__title'
        inverted={true}>
        Вход
      </FormTitle>
      <form>
        <FormInput
          className='form__field'
          placeholder='Email'
          id='email'
          type='email'
          value={email}
          setValue={setEmail}
          inverted={true}
        />
        <FormInput
          className='form__field'
          placeholder='Пароль'
          id='password'
          type='password'
          value={password}
          setValue={setPassword}
          inverted={true}
        />
        <SubmitButton
          className='form__btn'
          inverted={true}
        >
          Войти
        </SubmitButton>
      </form>
    </div>
  )
}

export default Login