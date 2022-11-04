import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-teal-800 h-16 px-2">
      <span className="hidden md:inline-block text-xl font-semibold text-teal-500">
        Let's Chat
      </span>
      <div className="flex gap-3">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1661347561118-dafef99402ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
        <span className="text-sm text-stone-200 py-2">Henok Urufa</span>
        <button
          onClick={() => signOut(auth)}
          className="absolute bottom-2 left-2 text-sm bg-teal-200 rounded-md p-2 font-bold hover:bg-teal-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
