import { useState } from "react";
import {Link, NavLink} from "react-router-dom";

import "./Navbar.scss"
import menuIcon from "../../images/menu.svg"


function Navbar() {

    const[menuActive, setMenuActive] = useState(false);

    const showMenu = () => {
        setMenuActive(!menuActive);
    }


  return (
    <nav className="navbar">
        <div className="container navbar__container">
            <Link to="/" className="navbar__logo">My Logo</Link>
            <button onClick={showMenu} className="navbar__toggle">
                <img src={menuIcon} alt="menu-img" />
            </button>

            <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>
                <NavLink onClick={showMenu} to="/" className="navbar__menu-link">Home</NavLink>
                <NavLink onClick={showMenu} to="/about" className="navbar__menu-link">About</NavLink>
                <NavLink onClick={showMenu} to="/services" className="navbar__menu-link">Services</NavLink>
                <NavLink onClick={showMenu} to="/news" className="navbar__menu-link">News</NavLink>
                <NavLink onClick={showMenu} to="/contacts" className="navbar__menu-link">Contacts</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar