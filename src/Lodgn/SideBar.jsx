import React, { useState } from 'react';
import {BsArrowLeftShort} from 'react-icons/bs'
import data from '../Api/Nav'

const SideBar = () => {
    
    const [open, setOpen] = useState(true);
    const [navData, setNavData] = useState(data);


  return (
    <>
     <div className={`title bg-white h-screen p-5 duration-300 
        pt-3 relative shadow-md ${open ? "w-60" : "w-5"}`}>
      
        <BsArrowLeftShort  
         className={`text-white bg-black text-3xl rounded-full absolute
         -right-3 top-8 border-2 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}        
          />

         <h1 className={`text-2xl font-bold uppercase py-4 text-left ${!open && "scale-0"}`}>
          Lodgn
         </h1>

          <div className="nav_list">
            
                {navData.map((currElem , indx) => {
                    return(
                        <div className="list" key={indx}>
                           <h1 className={`text-black hover:text-green-600 py-4 font-semibold
                           cursor-pointer ${!open && "scale-0"}`}>
                           {currElem.name}
                         </h1>
                       <hr />
                      </div>
                    )
                })}
           </div>

           <div className={`nav_btn mt-[100%] ${!open && "scale-0"}`}>
              <button className="bg-green-600 text-white px-12 py-2 border-r-2 rounded-md
              hover:bg-green-700">
                Log-Out
              </button>

               <div className="help text-center">
                 <p className="text-xs font-normal p-2 right-[50%]">
                   Help Desk
                 </p>
                 <p className="text-xs font-normal px-1 right-[50%]">
                   786-874 9988
                </p> 
            </div>
         </div>
      </div>
    </>
  );
};

export default SideBar;
