import React from 'react'
import {FaVideo} from "react-icons/fa"
import Messages from './Messages'
import Input from './Input'

function Chat() {
  return (
    <div className="basis-3/5 rounded-r-lg">
      <div className="flex justify-between items-center h-16 px-4 bg-green-900">
        <span className="font-semibold text-slate-300">Kuku</span>
        <div className="flex gap-6 text-gray-400 text-lg">
          <FaVideo className="cursor-pointer"/>
          <FaVideo className="cursor-pointer"/>
          {/* <FaVideo className="cursor-pointer"/> */}
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat