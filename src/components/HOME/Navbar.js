import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div>
    <div className="navTop">
            <div className="navItem">
            <img src='https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg' alt="" width={100} height={100} />
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