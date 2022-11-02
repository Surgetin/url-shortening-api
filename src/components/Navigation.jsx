import React from "react";
import { navLinks, navLinks2 } from '../constants';
import logo from '../images/logo.svg';


const navigation = () => {

    return (
        <div className="wrapper">
            <nav className="nav_container">
                <ul className="nav_lists">
                    <div className="nav_list-container">
                        <div className="logo_container">
                            <a href="#home">
                                <img src={logo} alt="logo" />
                            </a>    
                        </div>
                        {navLinks.map((nav) => (
                        <li key={nav.id} className="nav_list-item">
                            <a className="nav_link" href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                    </div>
                    <div className="nav_list-container">
                        {navLinks2.map((nav) => (
                            <li key={nav.id} className="nav_list-item">
                                <a className={nav.className ? nav.className : "nav_link"} href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </div>
                    <div class="menu">
                        <span class="menu__btn"></span>
                        <span class="menu__btn"></span>
                        <span class="menu__btn"></span>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default navigation;