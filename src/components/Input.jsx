import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { doc, updateDoc, arrayUnion, Timestamp, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage, db } from "../firebase";


import {v4 as uuid} from "uuid";

import picture from "../asset/picture.svg";
import { RiSendPlaneFill } from "react-icons/ri";

function Input() {
  const [text, setText] = useState("")
  const [image, setImage] = useState(null)

  const {currentUser} = useContext(AuthContext)
  const { data } = useContext(ChatContext) 

  const handleSend = async () => {
    if(image) {

      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (error) => {
          // Error handling
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            });
          });
      }
      );

    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
    });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId+ ".date"]: serverTimestamp()
    })

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId+ ".date"]: serverTimestamp()
    })

    setText("");
    setImage(null);
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSend();
  }

  return (
    <div className="h-14 bg-slate-100 p-2 flex justify-between items-center gap:6">
      <input
        type="text"
        placeholder="Type something..."
        className="p-2 w-4/5 text-slate-700 bg-transparent placeholder:text-slate-400"
        onChange={(e) => setText(e.target.value)}
        value={text}
        onKeyDown={handleKey}
      />
      <div className="flex gap-2 items-center">
        <input type="file" className="hidden" id="file" onChange={(e) => setImage(e.target.files[0])}/>
        <label htmlFor="file">
          <img className="h-6 w-6 md:h-8 md:w-8 object-cover cursor-pointer" src={picture} alt="" />
        </label>
        <div className="bg-gray-500 p-1 md:p-2 rounded-full cursor-pointer" onClick={handleSend}>
          <RiSendPlaneFill className="text-white text-sm md:text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Input;
