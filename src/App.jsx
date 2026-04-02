import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { ThemeContext } from './hooks/ThemeContext'

export default function App() {
  let {theme}=useContext(ThemeContext)
  return (
    <>
      <div className={`d-flex flex-column min-vh-100 ${theme === "dark" ? "bg-dark text-light min-vh-100" : "bg-light text-dark min-vh-100"}`}>
        <Navbar />
        <div className="container flex-grow-1 mt-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}