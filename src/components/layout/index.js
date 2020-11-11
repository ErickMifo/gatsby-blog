import React, {useState} from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';

function Layout({ children }) {

    const toggle = () => {
        setDark(!Dark)
    }

    const [Dark, setDark] = useState(true)

    return(
        <main   
        className = {Dark ? "dark" : "light"}>
        <Navbar
        DarkLight={Dark ? "Light Mode" : "Dark Mode"}
        toggleClick={toggle} />
            <div className="content">
            {children}
            </div>
        <Footer />
        </main>
    )
};

export default Layout