import React from 'react'

function Search() {
  return (
    <div className="border-b-4 border-blue-400">
      <div>
        <input className="bg-transparent text-white placeholder:text-sm placeholder:text-slate-200 p-2" type="text" placeholder="Find a user" />
      </div>
      <div className="flex gap-2 items-center p-2">
        <img className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1667142646726-c37117dfb420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
        <div>
          <span className="text-sm md:text-base text-slate-50">Nickol Defranc</span>
        </div>
      </div>
    </div>
  )
}

export default Search