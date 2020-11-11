import React, { useState } from 'react';
import './styles.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from 'gatsby';

function NavBar({toggleClick, DarkLight}) {

    const [click, setClick] = useState(false)

    const handleClick = () => {
setClick(!click)
    }


    return(

        <div className="navBar">

         <Link to='/'>
            <button
            className="buttonHome">
                 Random blog
            </button>
        </Link>


            <div className={click ? "nav-active" : "nav-links"}>


            <button
            onClick={toggleClick}
            className="buttonnav"> 
            {DarkLight}
            </button>
            

            </div>

            <div role="button" tabIndex={0} className="menu-icon" onClick={handleClick} onKeyDown={handleClick}> 

            {click ? <ClearIcon /> : <DehazeIcon />}
            
          </div>
        </div>
    )
}

export default NavBar