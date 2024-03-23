import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Message from './Message'


const Chat = () => {
const scroll = useRef()
    return (
        <>

            <main className='flex flex-col  p-[10px] relative'>
                <Message />
            </main>

            <span  ref={scroll}></span>
        </>

    )
}

export default Chat