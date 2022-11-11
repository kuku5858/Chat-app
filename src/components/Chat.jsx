import React, { useContext } from 'react'
import {FaVideo} from "react-icons/fa"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

function Chat() {

  const {data} = useContext(ChatContext);

  return (
    <div className="basis-3/5 rounded-r-lg">
      <div className="flex justify-between items-center h-16 px-4 bg-slate-300">
        <span className="font-semibold text-slate-600">{data.user?.displayName}</span>
        <div className="flex gap-6 text-gray-600 text-lg">
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