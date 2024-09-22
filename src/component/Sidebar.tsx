//import React from "react";
import { FaThLarge } from "react-icons/fa";

function Sidebar() {
  
  return (
    <div className="flex flex-col items-center w-[280px] h-max border-t border-[#1E1E1E69]">
      
      <button className="mt-[15px] flex flex-row items-center p-[10px] w-[250px] h-[40px] border-b border-black bg-[#1E1E1E] rounded-[10px]">
        <FaThLarge className="basis-[40px] text-[#C0E888]" /> 
        <span className="text-ml font-semibold text-[#C0E888]">
          Project</span>
      </button>

      <button className="mt-[5px] flex flex-row items-center p-[10px] border-b border-gray-200 text-black hover:bg-[#1E1E1E] rounded-[10px] w-[250px] h-[40px] hover:text-ml hover:font-bold hover:text-[#C0E888]">
        <FaThLarge className="basis-[40px]  " /> 
        <span className="text-ml  font-semibold">Menu</span>
      </button>

      <button className="mt-[5px] flex flex-row items-center p-[10px] border-b border-gray-200 text-black hover:bg-[#1E1E1E] rounded-[10px] w-[250px] h-[40px] hover:text-ml hover:font-bold hover:text-[#C0E888]">
        <FaThLarge className="basis-[40px]  " /> 
        <span className="text-ml  font-semibold">Menu</span>
      </button>

      <button className="mt-[5px] flex flex-row items-center p-[10px] border-b border-gray-200 text-black hover:bg-[#1E1E1E] rounded-[10px] w-[250px] h-[40px] hover:text-ml hover:font-bold hover:text-[#C0E888]">
        <FaThLarge className="basis-[40px]  " /> 
        <span className="text-ml  font-semibold">Menu</span>
      </button>

      
    </div>
  );
}

export default Sidebar;
