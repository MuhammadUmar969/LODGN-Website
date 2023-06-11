import React from 'react'
import Box from './Box'
import Box2 from './Box2'

const MainPage = () => {
  return (
    <>
       <div className="heading bg-gray-200 w-full h-screen">
          <h1 className="xl:text-xl sm:text-lg whitespace-wrap text-green-600 pl-[50px] xl:pl-[150px] md:pl-[80px] py-7">
             You currently have 3 requests
          </h1>

           <Box />
          <Box2 />
      </div>
    </>
  )
}

export default MainPage
