import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className="bg-teal-900 h-screen flex items-center justify-center">
      <div className="h-4/5 md:w-4/5 lg:w-2/3 md:h-3/4 rounded-lg flex">
        <Sidebar/>
        <Chat />
      </div>
    </div>
  )
}

export default Home