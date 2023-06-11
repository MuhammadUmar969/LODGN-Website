import React from 'react'
import SideBar from './Lodgn/SideBar'
import MainPage from './Lodgn/MainPage'
import './App.css'

const App = () => {
  return (
    <>
    <div className="flex">
      <SideBar />   
      <MainPage />  
    </div>
    </>
  )
}

export default App
