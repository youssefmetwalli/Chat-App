import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'


const NavBar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='bg-gray-800 h-20 flex justify-between items-center p-4'>
        <h1 className='text-white text-3xl'> Chat App </h1>
        <Signin />

    </div>
  )
}

export default NavBar