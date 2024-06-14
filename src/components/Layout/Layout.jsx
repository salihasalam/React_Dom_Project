import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className=""><Nav/>
    <main>{children}</main>
    <Footer/>
    </div>
  )
}

export default Layout