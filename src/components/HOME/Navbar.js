import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
    <div className="navTop">
            <div className="navItem">
            <img src="images/logo.jpg" alt="BigCo Inc. logo"/>
            </div>
            
            

            
            <div className="navItem">
                <Link to="/signin" className="limitedOffer">SIGN IN </Link>
            </div>
        </div>
        <div className="navBottom">
            <li><Link to="/" className="menuItem">HOME</Link></li>
            <li><Link to="/About"className="menuItem">ABOUT</Link></li>
            <li><Link to="/partners" className="menuItem">PARTNERS</Link></li>
            <li><Link to="/testimonials" className="menuItem">TESTIMONIALS</Link></li>
            <li><Link to="/cases" className="menuItem">CASES</Link></li>
          
            
        </div>
        </div>
  );
};

export default Navbar;