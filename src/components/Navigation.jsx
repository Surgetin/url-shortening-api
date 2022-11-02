import React from "react";
import { navLinks, navLinks2 } from '../constants';
import logo from '../images/logo.svg';


const navigation = () => {

    return (
        <div className="nav_container">
            <div className="nav">
                <nav className="navigation">
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
                        <div className="nav_list-container-login">
                            {navLinks2.map((nav) => (
                                <li key={nav.id} className="nav_list-item">
                                    <a className={nav.className ? nav.className : "nav_link"} href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </div>
                        <div className="menu">
                            <span className="menu__btn"></span>
                            <span className="menu__btn"></span>
                            <span className="menu__btn"></span>
                        </div>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default navigation;