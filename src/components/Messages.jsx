import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";

function Messages() {
  const [messages, setMesseges] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMesseges(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);

  return (
    <div className="bg-slate-50 p-2 msgs overflow-scroll">
      {messages.map((m) => {
        return <Message message={m} key={m.id} />;
      })}
    </div>
  );
}

export default Messages;
