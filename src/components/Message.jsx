// Message.js
import React from 'react'

const Message = ({ message }) => {
    const style = {
        sent: 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full',
        received: 'bg-[#e5e5ea] text-black float-left rounded-br-full'
    }

    return (
        <div className={`flex items-center shadow-xl m-4 py-4 px-3 ${message.sent ? style.sent : style.received}`}>
            <p className='text-gray-600 text-xs'>
                {message.text}
            </p>
        </div>
    )
}

export default Message;
