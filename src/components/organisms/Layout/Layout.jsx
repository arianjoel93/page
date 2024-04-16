import "./Layout.scss"
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeflex/primeflex.css';  
import 'primeicons/primeicons.css';
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main className='mainContainer'>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout