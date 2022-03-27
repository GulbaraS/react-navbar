import { useState } from "react";

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
            <a href="/" className="navbar__logo">My Logo</a>
            <button onClick={showMenu} className="navbar__toggle">
                <img src={menuIcon} alt="menu-img" />
            </button>

            <div className={menuActive ? "navbar__menu--show" : "navbar__menu"}>
                <a href="/" className="navbar__menu-link active">Home</a>
                <a href="/" className="navbar__menu-link">About</a>
                <a href="/" className="navbar__menu-link">Services</a>
                <a href="/" className="navbar__menu-link">News</a>
                <a href="/" className="navbar__menu-link">Contacts</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar