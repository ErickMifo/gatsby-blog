import React from 'react';
import './styles.css';
import { Link } from 'gatsby';

function NavBar({toggleClick, DarkLight, handleClickContato}) {


    return(

        <div className="navBar">

         <Link to='/'>
            <button
            className="buttonHome">
                 Random blog
            </button>
        </Link>

            <button
            onClick={toggleClick}
            className="buttonnavLight"> 
            {DarkLight}
            </button>

            
            <button
            onClick={handleClickContato}
            className="buttonnav"> 
            Contato
            </button>
            

            </div>


    )
}

export default NavBar