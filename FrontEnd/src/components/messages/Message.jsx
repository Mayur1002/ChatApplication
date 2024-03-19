import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'


const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const fromattedTime = extractTime(message.createdAt)
  const chatClassname = fromMe ? 'chat-end' : 'chat-start'
  const profilepic = fromMe ? authUser.profilepic : selectedConversation.profilepic
  const bubbleBgColor = fromMe? 'bg-blue-500' : ""

  const shakeClass = message.shouldShake ? "shake" : ""
  // console.log(profilepic)

  return (
    <div className={`chat ${chatClassname}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img  src= {profilepic} alt="MSG" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 item-center text-white'>{fromattedTime}</div>
    </div>
  )
}

export default Message
