import React from 'react';

const Box = () => {
  return (
    <>
      <div className="bg-white mx-2 md:mx-10 lg:mx-20 xl:mx-40 box-border h-auto md:h-40 w-full xl:w-[70%] lg:w-[70%] md:w-[77%] border-4 shadow-gray-300 shadow-lg border-none p-6">
         <div className="box-tags flex flex-col md:flex-row md:divide-x-[1px] divide-gray-400 space-y-4 md:space-y-0 md:space-x-8">
           <div className="name px-0 md:flex-row">
             <h1 className="text-green-600 whitespace-nowrap xl:text-xl">
              St Judges Hospital
             </h1>
             <p className="text-xs">
              Sarasota, FL. 33178
             </p>
           </div>

           <div className="dates flex flex-col md:flex-row md:px-2">
             <div className="date1">
               <h1 className="text-green-600 xl:text-xl">
                10
               </h1>
               <p className="text-xs">
                October
               </p>
            </div>

              <p className="md:mx-2">-</p>

             <div className="dates2">
              <h1 className="text-green-600 xl:text-xl">
               17
              </h1>
              <p className="text-xs">
               December
              </p>
            </div>
          </div>

          <div className="rooms px-2 xl:px-2 lg:px-0">
            <h1 className="text-green-600 whitespace-nowrap xl:text-xl">
             20 Rooms
            </h1>
            <p className="text-xs whitespace-break-spaces">
             10 Singles, 10 Doubles
            </p>
          </div>
        </div>

        <div className="btn flex mt-8 md:mt-4 border-gray-400 border-2 rounded-full divide-x">
          <button className="flex items-center uppercase text-gray-400 overflow-hidden">
            <div className="flex-1 rounded-l-full bg-yellow-300 py-2 px-6 text-justify sm:pr-8 md:pr-12 lg:pr-16
              xl:pr-52">
               Received
            </div>
            <div className="py-2 px-4">
              Negotiating
            </div>
            <div className="flex-1 py-2 px-4">
             Completed
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Box;
