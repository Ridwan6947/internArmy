import React from 'react'
import Messages from '../messages/Messages.jsx'
import MessageInput from './MessageInput.jsx'
import {TiMessages} from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? (
          <NoChatSelected/>
        ):(
         <>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text text-white'>To:</span><span className='text-grey-900 font-bold'>Username</span>
            </div>
            <Messages/>
            <MessageInput/>
        </>
        )}
    </div>
  )
}

const NoChatSelected = () =>{
    return(
        <div className='flex  items-center justify-center w-full h-full'>
            <div className='px-4 text-centre sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome Username</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}

export default MessageContainer