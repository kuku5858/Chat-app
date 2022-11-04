import React from 'react'
import Message from './Message'

function Messages() {
  return (
    <div className="bg-teal-100 p-2 msgs overflow-scroll">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages