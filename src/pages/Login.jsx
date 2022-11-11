import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <div className="h-screen log-bg flex items-center justify-center">
      <div className="py-10 px-14 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <span className="text-2xl m-2 font-semibold text-purple-500">
          Let's Chat
        </span>
        <span className="mb-2 text-teal-800">Login</span>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-slate-400 p-2"
          />
          <input type="password" placeholder="Password" className="p-2" />
          <button className="bg-purple-800 p-4 text-white font-semibold cursor-pointer rounded-lg hover:bg-purple-900">
            Login
          </button>
          {err && <span>Oops, something went wrong...</span>}
        </form>
        <p className="mt-4">Don't have an account? <Link to="/register" className="text-purple-800">Regtister</Link></p>
      </div>
    </div>
  );
}

export default Login;
