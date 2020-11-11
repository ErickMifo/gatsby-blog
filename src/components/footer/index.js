import React from 'react';
import './styles.css';
import { Link } from 'gatsby';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
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
    <a rel="noopener noreferrer" target='_blank' href = "https://www.reddit.com/"  > 
    <RedditIcon className={classes.root} /> 
    </a> 
    <a rel="noopener noreferrer" target='_blank' href = "https://twitter.com/?lang=en" > 
    <TwitterIcon className={classes.root}/> 
    </a>
    <a rel="noopener noreferrer" target='_blank' href = "https://www.instagram.com/" > 
    <InstagramIcon className={classes.root}/> 
    </a>
    <a rel="noopener noreferrer" target='_blank'  href = "https://facebook.com/" >  
    <FacebookIcon className={classes.root} />
    </a>
      </div>
        <div className='footer-container'>
<div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link>
            <h2>Contato</h2>
            </Link>
          </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default Footer