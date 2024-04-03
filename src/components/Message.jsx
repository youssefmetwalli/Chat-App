import React from 'react'
import { auth } from '../firebase'

const style = {
    sent: 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full',
    received: 'bg-[#e5e5ea] text-black float-left rounded-br-full'
}

const Message = ({ message }) => {
    const messageStyle = 
    message.uid === auth.currentUser.uid ? style.sent : style.received;

    return (
        <div className={`${messageStyle} flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full`}>
            <p className='text-gray-600 text-xs absolute mt-[-4.5rem] '>{message.name}</p>
            <p>{message.text}</p>
        </div>
    )
}

export default Message;
