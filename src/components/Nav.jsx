import React from "react";
import Datetime from "./datetime";

const Nav = () => {        
  return (
    <div className="bg-white/20 text-[1.1rem] h-10 flex items-center justify-between text-black px-3">
      <div className="left flex items-center  gap-5  font-medium">
         <i class="ri-apple-fill"></i>
        <div className="nav-item">
          <p>Hania Kanwal</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>

      <div className="right flex items-center gap-5  font-medium">
        <Datetime/>
   <i class="ri-wifi-line"></i>
      </div>
    </div>
  );
};

export default Nav;
