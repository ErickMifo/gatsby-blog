import React, { useState, useRef } from 'react';
import Formulario from "../contato/form";
import './styles.css'
import Navbar from '../navbar';


function Layout({ children }) {

    
  const contatoRef = useRef()

  const handleClickContato = () => {
      window.scrollTo({
          behavior: "smooth",
          top: contatoRef.current.offsetTop
      })
  }


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
            <Formulario contatoRef={contatoRef} />
            </div>
        </main>

    )
};

export default Layout