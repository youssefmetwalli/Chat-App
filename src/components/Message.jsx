import React from 'react'


const style = {
    sent: 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full',
    received: 'bg-[#e5e5ea] text-black float-left rounded-br-full'
}

const Message = () => {
    return (
        <div>
            <div className='flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full'>
                <p className='fixed mt-[-4rem]  text-gray-600 text-xs'>
                    she7ta
                </p>
                <p>
                </p>

            </div>
        </div>
    )
}

export default Message