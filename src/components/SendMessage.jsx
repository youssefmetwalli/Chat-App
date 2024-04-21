import { collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc } from 'firebase/firestore';


const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
        alert('Please enter a valid message')
        return //once there is a return it exits the code n doesnt proceed any further
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    });
    setInput(''); 
    scroll.current.scrollIntoView({behavior: 'smooth'})
  };

  return (
    <form onSubmit={sendMessage} className='h-14 w-full max-w-[728px] flex text-xl absolute bottom-0 rounded-md '>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        placeholder='Message' 
        className='w-full text-xl p-3 bg-gray-900 text-white outline-none border-none'
        />

      <button className='w-[20%] bg-green-400' type='submit'> Send </button>
    </form>
  );
};

export default SendMessage;
