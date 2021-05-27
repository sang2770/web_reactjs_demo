import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import {SiProxmox} from "react-icons/si"
// import { IconContext } from 'react-icons/lib';
import "./Nav.css"
function Nav() {
    const [click, setclick] = useState(false);
    const handleClick=()=>{
        setclick(!click);
    }
    return (
        
        <div className="NavContainer ">
            
            <div className="Nav grid wide">
                <div className="Nav_logo">
                    
                    <h1 className="Nav_logo_title">
                    <span className='Logo'><SiProxmox/></span>
                    <span>ULTRA</span>
                    </h1>
                    <h1 className="MobileIcon" onClick={handleClick}>
                        {click ? <FaTimes/>: <FaBars/>}
                    </h1>
                </div>
                <ul className={click ?"Nav_MenuItem active_MenuItem":"Nav_MenuItem"}>
                    <Link to="/" >
                        <li className="MenuItem" onClick={handleClick}>
                            Home
                        </li>
                    </Link>
                    <Link to="/Services" >
                        <li className="MenuItem" onClick={handleClick}>
                            Services
                        </li>
                    </Link>
                    <Link to="/Product" >
                        <li className="MenuItem" onClick={handleClick}>
                            Product
                        </li>
                    </Link>
                    <Link to="/" >
                        <li className="MenuItem " onClick={handleClick}>
                            <button className="btn">SIGN UP</button>
                        </li>
                    </Link>
                </ul>
            </div>
        </div> 
    )
}

export default Nav
