import React from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

const ChatBox = () => {
  return (
    <div className='my-3 mx-auto chat-box '>
      <ChatList/>
      <ChatForm/>
    </div>
  )
}

export default ChatBox