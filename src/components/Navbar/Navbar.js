import { useState } from "react";
import {Link, NavLink} from "react-router-dom";

import "./Navbar.scss"
import menuIcon from "../../images/menu.svg"


function Navbar() {

    const[menuActive, setMenuActive] = useState(false);

    const showMenu = () => {
        setMenuActive(!menuActive);
    }

    const menuItems = [
        {
          id: 1,
          menu: "home",
          link: "/"
        },
         {
          id: 2,
          menu: "about",
          link: "about"
        },
         {
          id: 3,
          menu: "services",
          link: "services"
        },
         {
          id: 4,
          menu: "news",
          link: "news"
        },
         {
          id: 5,
          menu: "contacts",
          link: "contacts"
        }
    ]


  return (
    <nav className="navbar">
        <div className="container navbar__container">
            <Link to="/" className="navbar__logo">My Logo</Link>
            <button onClick={showMenu} className="navbar__toggle">
                <img src={menuIcon} alt="menu-img" />
            </button>

            <div className={menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"}>

                {menuItems.map((item) => {
                    return (
                        <NavLink onClick={showMenu}
                        to={item.link}
                        className="navbar__menu-link"
                        key = {menuItems.id}>
                        {item.menu}
                        </NavLink>
                    )
                })
                }


               
               
            </div>
        </div>
    </nav>
  )
}

export default Navbar