import React from 'react';
import pic from '../images/h.png';
import Holiday from './Holiday';
import Chat from './Chat';

const Box2 = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-white mt-5 sm:mx-5 md:mx-10 lg:mx-20 xl:ml-40 box-border h-auto xl:h-[55%] lg:h-[40%] md:h-[35%] w-full xl:w-[70%] lg:w-[70%] md:w-full border-4 shadow-gray-300 shadow-lg border-none rounded-xl p-6">
        <div className="box-tags flex flex-col md:flex-row md:divide-x-[1px] divide-gray-400 space-y-4 md:space-y-0 md:space-x-4">
          <div className="name px-0 md:flex-row">
            <h1 className="text-green-600 whitespace-nowrap xl:text-xl">St Judges Hospital</h1>
            <p className="text-xs">Sarasota, FL. 33178</p>
          </div>

          <div className="dates flex flex-col md:flex-row md:px-2">
            <div className="date1">
              <h1 className="text-green-600 xl:text-xl">10</h1>
              <p className="text-xs">October</p>
            </div>
            <p className="md:mx-2">-</p>
            <div className="dates2">
              <h1 className="text-green-600 xl:text-xl">17</h1>
              <p className="text-xs">December</p>
            </div>
          </div>

          <div className="rooms px-2 xl:px-2 lg:px-0">
            <h1 className="text-green-600 whitespace-nowrap xl:text-xl">20 Rooms</h1>
            <p className="text-xs whitespace-break-spaces">10 Singles, 10 Doubles</p>
          </div>
        </div>

        <button className="border-none w-[70%] xl:w-[60%]  md:w-auto mt-5 pt-2 pb-2 px-2 bg-green-600 uppercase text-white text-sm border-2 rounded-full sm:pr-8 md:pr-12 lg:pr-16 xl:pr-72">
          Completed
        </button>

        <div className="flex flex-row xl:flex-row lg:flex-wrap md:flex-wrap sm:flex-wrap space-x-8 xl:space-x-8 lg:space-x-12 md:space-x-[90px]">
          <div className="w-full sm:w-auto xl:w-auto lg:w-auto md:w-1/3 ">
            <div className="box-border mt-6 h-44 w-52 bg-zinc-100 rounded-md border border-gray-400 relative">
              <div className="box-border p-2 h-10 w-20 left-[70%] -top-3 bg-red-500 text-white rounded-xl text-sm relative">
                Rare Find
              </div>

              <div className="-mt-5">
                <img src={pic} className="h-10 p-2 ml-16" alt="Holiday Inn" />
                <h1 className="text-center italic text-green-500">Holiday Inn</h1>
              </div>
            </div>

            <div className="now box-border shadow-lg rounded-xl p-2 -mt-[80px] h-20 w-52 bg-zinc-100  border border-gray-400 absolute">
              <div className="head text-xs font-semibold text-gray-500">
                1.5 miles away from job location.
              </div>

              <div className="flex space-x-6 mt-2">
                <div className="font-semibold text-gray-500 text-sm">
                  <p>Singles: $120</p>
                  <p>Doubles: $145</p>
                </div>

                <button className="bg-green-600 text-white border-r-2 rounded-lg hover:bg-green-700 text-sm px-1 py-0">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto xl:w-auto lg:w-auto md:w-1/3 md:flex-row">
            <Holiday />
          </div>

          <div className="w-full sm:w-auto xl:w-auto lg:w-auto md:w-1/3 md:flex-row">
            <Holiday />
          </div>
        </div>
      </div>

      <div>
        <Chat />
      </div>
    </div>
  );
};

export default Box2;
