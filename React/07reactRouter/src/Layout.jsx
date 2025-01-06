import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />        
    <Footer />
    </>
  )
}

export default Layout

//Layout created to link header, footer & content
//Wherever u pass outlet only that content will chnge. Here, header & footer remains same
//outlet at middle means only middle content change