import React from "react";
import footerLogo from '../images/logowhite.svg';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const FooterSection = () => {
    return (
        <div className="footer_section-container">
            <div className="footer_logo-container">
                <a href="#home">
                    <img src={footerLogo} alt="logo" />
                </a> 
            </div>
            <div className="links_container">
                <h1 className="footer_links-heading">Features</h1>                    
                <ul className="footer_links">
                    <li className="footer_link">Link Shortening</li>
                    <li className="footer_link">Branded Links</li>
                    <li className="footer_link">Analytics</li>
                </ul>
            </div>
            <div className="links_container">
                <h1 className="footer_links-heading">Resources</h1>
                <ul className="footer_links">
                    <li className="footer_link">Blog</li>
                    <li className="footer_link">Developers</li>
                    <li className="footer_link">Support</li>
                </ul>
            </div>
            <div className="links_container">
                <h1 className="footer_links-heading">Company</h1>
                <ul className="footer_links">
                    <li className="footer_link">About</li>
                    <li className="footer_link">Our Team</li>
                    <li className="footer_link">Careers</li>
                    <li className="footer_link">Contact</li>
                </ul>
            </div>
            <div className="social_container">
                <img src={facebook} alt="facebook icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={pinterest} alt="pinterest icon" />
                <img src={instagram} alt="instagram icon" />
            </div> 
        </div>
    );
};

export default FooterSection;