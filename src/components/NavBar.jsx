import React from 'react'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import Logout from './Logout'


const NavBar = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='bg-gray-800 h-20 w-full flex justify-between items-center p-4'>
        <h1 className='text-white text-3xl'> YoChat </h1>
        {user ?  <Logout /> : <Signin />}

    </div>
  )
}

export default NavBar