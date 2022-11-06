import React from "react";
import { navLinks, navLinks2 } from '../constants';
import logo from '../images/logo.svg';

const Navigation = () => {
    return (
        <div className="nav_container">
            <div className="nav">
                <nav className="navigation">
                    <div className="nav_list-container">
                        <div className="logo_container">
                            <a href="#home">
                                <img src={logo} alt="logo" />
                            </a>    
                        </div>
                        <ul className="nav_lists">
                            {navLinks.map((nav) => (
                                <li key={nav.title} className="nav_list-item">
                                    <a className="nav_link" href={`#${nav.title}`}>{nav.content}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav_list-container-login">
                        <ul className="nav_lists">
                            {navLinks2.map((nav) => (
                                <li key={nav.title} className="nav_list-item">
                                    <a className={nav.className ? nav.className : "nav_link"} href={`#${nav.title}`}>{nav.content}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="menu">
                        <span className="menu__btn"></span>
                        <span className="menu__btn"></span>
                        <span className="menu__btn"></span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;