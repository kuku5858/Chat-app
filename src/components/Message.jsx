import React from "react";

function Message() {
  const owner = true;
  return (
    <div
      className={`flex gap-2 items-center mb-6 mx-2 ${
        owner === true && "flex-row-reverse"
      }`}
    >
      <div>
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1667142646726-c37117dfb420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <span className="text-xs md:text-sm text-stone-400">Just now</span>
      </div>
      <div className={`w-2/3 flex flex-col gap-1 md:gap-2 ${owner === true && "items-end"}`}>
        <p
          className={`text-sm w-fit p-2 bg-slate-100 rounded-r-lg rounded-bl-lg ${
            owner === true && "rounded-l-lg rounded-tr-none bg-slate-400"
          }`}
        >
          hello
        </p>
        {/* <img
          className="w-2/5"
          src="https://images.unsplash.com/photo-1667142646726-c37117dfb420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Message;
