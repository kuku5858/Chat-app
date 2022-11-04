import React from "react";
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'


function Sidebar() {
  return (
    <div className="basis-2/5 rounded-l-lg bg-teal-700 overflow-scroll relative">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}

export default Sidebar;
