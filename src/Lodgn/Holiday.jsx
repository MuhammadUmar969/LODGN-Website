import React from 'react'
import pic from '../images/h.png'

const Holiday = () => {
  return (
    <>
       <div className="box-border mt-6 h-44 w-52 bg-zinc-100 rounded-md border border-gray-400 relative"> 
         <div className="mt-5">
              <img 
               src={pic} 
               className="h-10 p-2 ml-16"/>
              <h1 className="text-center italic text-green-500">Holiday Inn</h1>
         </div>     
        </div>

         <div className="now box-border shadow-lg rounded-xl p-2 -mt-[80px] h-20 w-52 bg-zinc-100  border border-gray-400 absolute">
            <div className="head text-xs font-semibold text-gray-500 ">
                 1.5 miles away from joblocation.
            </div>

            <div className="flex space-x-6 mt-2">
               <div className="font-semibold text-gray-500 text-sm">
                 <p>Singles:$120</p>
                 <p>Doubles:$145</p>
               </div>

                 <button className="bg-green-600 text-white border-r-2 rounded-lg
                hover:bg-green-700 text-sm px-1 py-0">
                  Book Now
                 </button>
               </div>
        </div>
    </>
  )
}

export default Holiday
