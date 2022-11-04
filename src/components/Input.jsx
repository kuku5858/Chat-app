import React from "react";
import picture from "../asset/picture.svg";
import { ImAttachment } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";

function Input() {
  return (
    <div className="h-14 bg-slate-100 p-2 flex justify-between items-center gap:6">
      <input
        type="text"
        placeholder="Type something..."
        className="p-2 w-4/5 text-slate-700 bg-transparent placeholder:text-slate-400"
      />
      <div className="flex gap-2 items-center">
        {/* <img class="h-8 w-8 object-cover" src={picture} alt="" /> */}
        <ImAttachment className="text-lg md:text-xl text-slate-500 cursor-pointer" />
        <input type="file" className="hidden" id="file" />
        <label htmlFor="file">
          <img className="h-6 w-6 md:h-8 md:w-8 object-cover cursor-pointer" src={picture} alt="" />
        </label>
        <div className="bg-gray-500 p-1 md:p-2 rounded-full cursor-pointer">
          <RiSendPlaneFill className="text-white text-sm md:text-lg" />
        </div>
      </div>
    </div>
  );
}

export default Input;
