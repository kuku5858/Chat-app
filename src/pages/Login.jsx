import React from 'react'

function Login() {
  return (
    <div className="h-screen bg-teal-800 flex items-center justify-center">
      <div className="py-10 px-14 bg-white shadow-xl rounded-xl flex flex-col items-center">
        <span className="text-2xl m-2 font-semibold text-teal-500">
          Let's Chat
        </span>
        <span className="mb-2 text-teal-800">Login</span>
        <form className="flex flex-col gap-6 w-full">
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-slate-400 p-2"
          />
          <input type="password" placeholder="Password" className="p-2" />
          <button className="bg-teal-700 p-4 text-white font-semibold cursor-pointer rounded-lg hover:bg-teal-900">
            Login
          </button>
        </form>
        <p className="mt-4 text-teal-800">Don't have an account? Regtister</p>
      </div>
    </div>
  )
}

export default Login