import React from 'react';
import { useSelector } from 'react-redux';
import './LoginSuccess.css'

const LoginSuccess = () => {
    //Name of the user
    const {userProfile} = useSelector(state => state.createAccount)

  return (
    <h1 className='congratuation_message'>Congratuation !! {userProfile.name} 🥳🥳 has Successfully Registered !</h1>
  )
}

export default LoginSuccess