import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
// import TiMessage from 'react-icons/ti'
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
    const noChatSelected = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {noChatSelected ? (<NoChatSelected/>):(
            <>
        {/* Header */}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{""}
                <span className='text-grey-900 font-bold'>Mayur Dadas</span>
            </div>
            <Messages/>
            <MessageInput/>
        </>
        )} 
      
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () =>{  
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2'>

            <p>Welcome 🖐️ Mayur Dadas ❄️</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='text-3x1 md:text-6x1 text-center' style={{ fontSize: '5rem' }}/>
        </div>
       </div>
   )
 }
