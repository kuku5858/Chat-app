import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";



function Message({message}) {
  const {currentUser} = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: "smooth"})
  }, [message])
  
  return (
    <div ref={ref}
      className={`flex gap-2 items-center mb-6 mx-2 ${
        message.senderId === currentUser.uid && "flex-row-reverse"
      }`}
    >
      <div>
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={message.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt=""
        />
        <span className="text-xs md:text-sm text-stone-400">{message.data}</span>
      </div>
      <div className={`w-2/3 flex flex-col gap-1 md:gap-2 ${message.senderId === currentUser.uid && "items-end"}`}>
        <p
          className={`text-sm w-fit p-2 bg-slate-200 rounded-r-lg rounded-bl-lg ${
            message.senderId === currentUser.uid && "rounded-l-lg rounded-tr-none bg-purple-300"
          }`}
        >
          {message.text}
        </p>
        {message.img && <img
          className="w-2/5"
          src={message.img} alt=""
        />}
      </div>
    </div>
  );
}

export default Message;
