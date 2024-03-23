import React from 'react'
import { auth } from '../firebase'



const Logout = () => {
    const signOut = ()  => {
        auth.signOut();
    }
  return (
    <div  className='bg-gray-200 px-4 py-2 hover:bg-gray-50 ' onClick={signOut}>
        Logout
    </div>
  )
}

export default Logout