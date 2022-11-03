import React from "react";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import {Link}from "react-router-dom";


const About = ({longitude, latitude, exactLocation}) => {
const [isFlipped, setIsFlipped] = useState(false);
const handleClick = ()=>{
  setIsFlipped(!isFlipped);
};



  return (
    <div>
        <div className="about_section">
            <h4 class="nsTitleplus">ABOUT US</h4>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div className="cardfront">
              An organisation advancing social justice in communities and among university students. 
                <button onClick={handleClick}>Click</button>
              </div>
              <div className="cardback">
              With the iREPORTER web application registered users are given a platform to expose any kind of information or activity that is deemed  illegal, unethical or not correct in the eyes of society.
                <button onClick={handleClick}>Click</button>
              </div>
            </ReactCardFlip>
            {/* <iframe style={{width:"100%", height: "50%"}} src="https://maps.google.com/maps?q=kiwanja%20secondary%20school&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
            
            </div>
            

            

            <Link  to="/signup" className="productButton"> create case </Link> 

            {/* <div>{`Longitude:${longitude}&&Latitude:${latitude}&&Location:${exactLocation}`}</div> */}

    </div>
   
  );

};

export default About;