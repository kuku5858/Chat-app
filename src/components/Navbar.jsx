import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center bg-slate-200 h-16 px-2">
      <span className="hidden md:inline-block text-xl font-semibold text-purple-500">
        Let's Chat
      </span>
      <div className="flex gap-3 ">
        <span className="text-sm text-stone-800 py-2 font-semibold">{currentUser.displayName}</span>
        <img
          className="h-10 w-10 object-cover rounded-full"
          src={currentUser.photoURL} alt=""
        />
        <button
          onClick={() => signOut(auth)}
          className="absolute bottom-2 left-2 text-sm bg-purple-200 rounded-md p-2 font-bold hover:bg-purple-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
