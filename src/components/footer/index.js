import React from 'react';
import './styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';



function Footer() {

    return(
      <>
    <div className="social">
    <a rel="noopener noreferrer" target='_blank' href = "https://github.com/ErickMifo"  > 
    <GitHubIcon className='iconGit' /> 
    </a> 
        </div>
        </>
    )
}

export default Footer