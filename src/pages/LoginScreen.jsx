import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contex/AuthContex'
import {authTypes} from '../types/authTypes'
import { useNavigate } from 'react-router-dom'

const LoginScreen = () => {
const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()
  const handleLogin = () => {
  dispatch({type: authTypes.login})

  navigate("/login")
  
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
