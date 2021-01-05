import React, { useState, useEffect } from 'react'
import { login } from '../actions/userActions'
import { useSelector, useDispatch } from 'react-redux'

export const LoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true)
  const errorMessage = useSelector(state => state.authenticationReducer.errorMessage)
  const isLoading = useSelector(state => state.authenticationReducer.isLoading)
  const dispatch = useDispatch()
  
  useEffect(() => {
    setLoginButtonDisabled(!(email && password))
  }, [email, password, isLoading])

  const handleChange = (event) => {
    
    if(event.target.name === 'email') {
      setEmail(event.target.value)
    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }

  const submit = (event) => {
    event.preventDefault()
    dispatch(login(email, password, props.history))
  }

  return (
    <div>
      <h1>Log in</h1>
      <div className={ isLoading ? 'loading' : ''}></div>
      <div className="error">{ errorMessage }</div>
      <form className='form'>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' value={ email } onChange={ handleChange } />

        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={ password } onChange={ handleChange } />

        <input type='submit' value="Log in" disabled={ loginButtonDisabled } onClick={ submit } />
      </form>
    </div>
  )
}

export default LoginForm