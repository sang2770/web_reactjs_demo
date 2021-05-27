import React from 'react'
import "./Footer.css"
import {SiProxmox} from "react-icons/si"
import {Link} from 'react-router-dom'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_container grid">
                <div className="Footer_title">
                    <h1 className="title_content">
                    Join our exclusive membership to receive the latest news and trends
                    </h1>
                    <p className="title_context">You can unsubscribe at any time.</p>
                </div>
                <div className="Footer_form row">
                    <div className=" form col  c-12 l-7 m-12">
                        <input type="text" className="form_input " placeholder="Your Email" />
                    </div>
                    <div className="form col  c-12 l-5 m-12">
                        <button className="btn btn-form ">Subscribe</button>
                    </div>
                </div>
                <div className="row Footer_Contact">
                    <div className="ContactItem l-3 c-6 m-4">
                        <div className="ContactItem_title">
                            About Us
                        </div>
                        <ul className="ContactMenu">
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> How it works</Link>
                            </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Testimonials</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> Careers</Link>
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Investors</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Terms of Service</Link>
                                    </li>
                        </ul>
                    </div>
                    <div className="ContactItem col l-3 c-6 m-4">
                        <div className="ContactItem_title">
                             Videos
                        </div>
                        <ul className="ContactMenu">
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Submit Video</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> Ambassadors</Link>
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> Agency</Link>
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> Influencer</Link>
                                   </li>
                            
                        </ul>
                    </div>
                    <div className="ContactItem col  l-3 c-6 m-4">
                        <div className="ContactItem_title">
                            Contact Us
                        </div>
                        <ul className="ContactMenu">
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Contact</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link"> Support</Link>
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Destinations</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Sponsorships</Link>
                                    </li>
                        </ul>
                    </div>
                    <div className="ContactItem col l-3 c-6 m-4">
                        <div className="ContactItem_title">
                        Social Media
                        </div>
                        <ul className="ContactMenu">
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Instagram</Link>
                                    </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Facebook</Link> 
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Youtube</Link> 
                                   </li>
                            <li className="Contact_MenuItem">
                               <Link to='/' className="Link">Twitter</Link>
                                    </li>
                        </ul>
                    </div>
                </div>
                <div className="Footer_Bottom">
                <div className="Footer_logo">
                    <h1 className="Nav_logo_title">
                        <span className='Logo'><SiProxmox/></span>
                        <span>ULTRA</span>
                    </h1>
                </div>
                <div className="Footer_text">
                    ULTRA@2020
                </div>
                <ul className="Footer_icon">
                    <li className="Footer_icon_item">
                        <FaFacebook/>
                    </li>
                    <li className="Footer_icon_item">
                        <FaInstagram/>
                    </li>
                    <li className="Footer_icon_item">
                        <FaTwitter/>
                    </li>
                    <li className="Footer_icon_item">
                        <FaYoutube/>    
                    </li>
                    <li className="Footer_icon_item">
                    <FaLinkedin/>
                    </li>
                </ul>
            </div>
            </div>
            
        </div>
    )
}

export default Footer
