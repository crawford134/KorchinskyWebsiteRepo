import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "../styles.scss"

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }
  const location = useLocation();
  return (
    <div>
      <nav className={location.pathname==="/" ? "navbar transparent" : "navbar"}>
        <div className="navbar-container">
            <Link to={"/KorchinskyWebsiteRepo/"} className="navbar-container-logo">
                <Diversity1Icon className="navbar-icon"/>
            </Link>
            <ul className={click ? "navbar-container-menu active transparent" : "navbar-container-menu transparent"}>
                <li className="navbar-container-menu-item"><Link to={"/KorchinskyWebsiteRepo/"} className='navbar-container-menu-item-link'>HOME</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/KorchinskyWebsiteRepo/about"} className='navbar-container-menu-item-link'>ABOUT US</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/KorchinskyWebsiteRepo/gallery"} className='navbar-container-menu-item-link'>GALLERY</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/KorchinskyWebsiteRepo/blog"} className='navbar-container-menu-item-link'>BLOG</Link></li> 
                <li className="navbar-container-menu-item"><Link to={"/KorchinskyWebsiteRepo/contact"} className='navbar-container-menu-item-link'>CONTACT US</Link></li> 
            </ul>
            <div className="navbar-container-icon" onClick={handleClick}>
            { 
                click ? <CloseIcon className="navbar-icon"/> : <MenuIcon className="navbar-icon"/>
            }
            </div>
        </div>
      </nav>
    </div>
  );
}
