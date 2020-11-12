import React from 'react';
import './styles.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      fontSize:"2rem",
      padding:"10px",
      '&:hover':{
        color:"#eb5e28",
     
      }
  },
  

})


function Footer() {
  const classes = useStyles()
    return(
      <>
    <div className="social">
    <a rel="noopener noreferrer" target='_blank' href = "https://github.com/ErickMifo"  > 
    <GitHubIcon className={classes.root} /> 
    </a> 
        </div>
        </>
    )
}

export default Footer