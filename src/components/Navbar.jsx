
import React, { useState } from 'react'
import {FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
 const [mblmenu, setMblMenu] = useState(false)
  return (
   <>
    <div className='nav-bar'>
    <div className="logo">
     <h1><span className='span1' style={{color: "red", fontFamily: "cursive"}}>A<span 
     className='span2' style={{color: "blue"}}>
      nalite
     </span></span>
     </h1>
    </div>

     <div className={
      mblmenu? "mbl-nav menu-link": "menu-link"}>
      <ul>
       <li><a href="/">home</a></li>
       <li><a href="/">about</a></li>
       <li><a href="/">services</a></li>
       <li><a href="/">contact</a></li>
      </ul>
     </div>
     <div className="social-media">
      <ul className='social-media-icons'>
       <li><a href="http://www.youtube.com">
        <FaYoutubeSquare className='youtube'/>
        </a></li>
       <li><a href="http://www.facebook.com">
        <FaFacebookSquare className='facebook' />
        </a></li>
       <li><a href="http://www.instagram.com ">
        <FaInstagramSquare  className='insta'/>
        </a></li>
      </ul>
     <div className="homeburger">
      <MenuIcon onClick={() => setMblMenu(!mblmenu)}/>
     </div>
     </div>

    </div>
 
    </>
  )
}

export default Navbar
