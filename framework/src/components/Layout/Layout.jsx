// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <><Navbar />
        <Outlet>
        </Outlet>
        <Footer />
        </>
    )
}

export default Layout