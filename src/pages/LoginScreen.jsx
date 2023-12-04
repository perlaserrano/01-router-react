import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contex/AuthContex'
import {authTypes} from '../types/authTypes'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const LoginScreen = () => {
const {dispatch} = useContext(AuthContext)
const history = useHistory()
  const handleLogin = () => {
  dispatch({type: authTypes.login})

  history.push("/")
  
  }
  return (
    <div className='container mt-5 text-center'>
        <img src="/assets/animate.gif" alt="animacion" />
        <h1 className='my-3'>Login Screen</h1>
        <button onClick={handleLogin} className='btn btn-primary'>
            Login
        </button>

    </div>
  )
}

export default LoginScreen
