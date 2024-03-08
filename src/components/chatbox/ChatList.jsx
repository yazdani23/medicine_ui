import React from 'react'
import ChatForm from './ChatForm'
import Message from './Message'

const ChatList = () => {
  return (
    <div className="chat-list d-flex flex-column">
      <Message type="requset" />
      <Message type="response" />
    </div>
  );
}

export default ChatList