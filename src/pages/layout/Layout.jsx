import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"


function Layout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <Header/>
            </header>
            <main className=' bg-gray-900 flex-grow'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    </React.Fragment>
  )
}

export default Layout