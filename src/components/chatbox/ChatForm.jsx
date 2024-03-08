import React from 'react'

const ChatForm = () => {
  return (
    <div class="d-flex position-absolute  w-75 chat-form">
      <input
        placeholder="Type your message here..."
        class="chakra-input css-no9zp3"
      />
      <button type="button" class="chakra-button css-gllksg">
        Submit
      </button>
    </div>
  );
}

export default ChatForm