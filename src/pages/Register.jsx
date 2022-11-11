import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'

import picture from "../asset/picture.svg";

export default function Register() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();

      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/")
          } catch (err) {
            console.log(err);
            setErr(err);
          }
        })
      });
    } catch (error) {
      setErr(error);
    }
  };
  console.log(err);

  return (
    <div className="h-screen log-bg flex items-center justify-center">
      <div className="py-8 px-14 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <span className="text-2xl m-2 font-semibold text-purple-500">
          Let's Chat
        </span>
        <span className="mb-2 text-teal-800">Register</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 m-4">
          <input
            required
            type="text"
            placeholder="Username"
            className="p-2 placeholder:text-slate-400"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="placeholder:text-slate-400 p-2"
          />
          <input
            required
            type="password"
            placeholder="Password"
            className="p-2"
          />

          <div className="flex items-center gap-2">
            <div className="shrink-0">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={picture}
                alt="Avatar"
              />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-purple-700
                  hover:file:bg-teal-100"
              />
            </label>
          </div>
          <button className="bg-purple-800 p-4 text-white font-semibold cursor-pointer rounded-lg hover:bg-purple-900">
            Sign up
          </button>
          {err && (
            <span className="text-xs text-red-700">
              Oops, Something went wrong...
            </span>
          )}
        </form>
        <p className="mt-2 ">Have an account? <Link to="/login" className="text-purple-800">Login</Link></p>
      </div>
    </div>
  );
}
