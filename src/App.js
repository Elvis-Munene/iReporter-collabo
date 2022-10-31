import "./App.css";
import Navbar from "./components/HOME/Navbar";
import Slide from "./components/HOME/Slide";
import Footer from "./components/HOME/Footer";
import About from "./components/HOME/About";
import Cases from "./components/HOME/Cases";
import Partners from "./components/HOME/Partners";
import CreateAccount from "./components/SignupSignin/CreateAccount";
import SignIn from "./components/SignupSignin/SignIn";
import Adminroutlinks from "../src/components/SignupSignin/components/admin/Adminroutlinks";
import Team from "../src/components/SignupSignin/components/user/team/index";
import Routlinks from "../src/components/SignupSignin/components/Routlinks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonials from "./components/HOME/Testimonials";
import { useState, useEffect } from "react";
import { LocationCityRounded } from "@mui/icons-material";


// import Routlinks from "./components/SignupSignin/components/Routlinks"

const API_endpoint = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en"
// const API_key = "ad2aa03a77f5cd002cb2327cfb16e947"

function App() {
const[latitude, setlatitude]= useState('');
const[longitude, setlongitude]= useState('');
const [exactLocation,setexactLocation]= useState('');

async function getLocation(){
try{
  navigator.geolocation.getCurrentPosition((position)=>{
    setlatitude(position.coords.latitude)
    setlongitude(position.coords.longitude)
    
  })
} catch(e){
  console.log(e)
}finally{
  console.log(latitude, longitude)
  fetch(`${API_endpoint}lat=${latitude}&long=${longitude}`)
  .then((res)=>{

    console.log("This is your location",res.body)
  })
  
};

}

useEffect(() =>{

getLocation()
},[])





  const [user, setUser] = useState("");

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="*" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Slide />
                <About />
                <Partners />
                <Testimonials />
                <Cases />
                <Footer />
              </div>
            }
          />

          <Route exact path="/about" element={<About longitude={longitude} latitude={latitude} exactLocation={exactLocation}/>} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/cases" element={<Cases />} />
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            exact
            path="/signup"
            element={<CreateAccount setUser={setUser} />}
          />
        </Routes>

        <Routes>
          <Route exact path="/admin" element={<Adminroutlinks />} />
          <Route exact path="/user" element={<Routlinks />} />
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
