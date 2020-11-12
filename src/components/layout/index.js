import React, {useState} from 'react';
import './styles.css'
import Navbar from '../navbar';
import Footer from '../footer';

function Layout({ children, handleClickContato }) {

    const toggle = () => {
        setDark(!Dark)
    }

    const [Dark, setDark] = useState(false)

    return(
        <main   
        className = {Dark ? "dark" : "light"}>
        <Navbar
        handleClickContato={handleClickContato}
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