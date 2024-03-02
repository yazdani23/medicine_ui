import React from 'react'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import ChatBox from '../components/chatbox'

const HomePage = () => {
  return (
    <div>
      <div className="d-flex">
        <div className='left-box'>
          <Sidebar />
        </div>
        <div className="right-box">
          <Header />
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default HomePage