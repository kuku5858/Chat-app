import React from "react";
// import { Link } from 'react-router-dom'

import picture from "../asset/picture.svg"

export default function Register() {
  return (
    <div className="h-screen bg-teal-800 flex items-center justify-center">
      <div className="py-8 px-14 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <span className="text-2xl m-2 font-semibold text-teal-500">
          Let's Chat
        </span>
        <span className="mb-2 text-teal-800">Register</span>
        <form className="flex flex-col gap-6 m-4">
          <input
            type="text"
            placeholder="Username"
            className="p-2 border-b border-indigo-600 placeholder:text-slate-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-slate-400 p-2"
          />
          <input type="password" placeholder="Password" className="p-2" />

           <div className="flex items-center gap-2">
           <div class="shrink-0">
              <img
                class="h-10 w-10 object-cover rounded-full"
                src={picture} alt="Avatar"
              />
            </div>
          <label class="block">
            <span class="sr-only">Choose profile photo</span>
            <input
              type="file"
              class="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-teal-700
                  hover:file:bg-teal-100" />
          </label>
           </div>
          <button className="bg-teal-700 p-4 text-white font-semibold cursor-pointer rounded-lg hover:bg-teal-900">
            Sign up
          </button>
        </form>
        <p className="mt-2 text-teal-800">Have an account? Login</p>
      </div>
    </div>
  );
}
