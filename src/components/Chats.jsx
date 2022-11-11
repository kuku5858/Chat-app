import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";

function Chats() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className="overflow-scroll">
      {Object.entries(chats) && Object.entries(chats).sort((a,b) => b[1].date - a[1].date).map((chat) => {
        return (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="flex gap-2 items-center p-2 cursor-pointer hover:bg-purple-50"
          >
            <img
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              src={chat[1].userInfo.photoURL}
              alt=""
            />
            <div className=" ">
              <span className="text-xs md:text-base text-gray-600 font-semibold">
                {chat[1].userInfo.displayName}
              </span>
              <p className="text-gray-500 text-xs">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Chats;
