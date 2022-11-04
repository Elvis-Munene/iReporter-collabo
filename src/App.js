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
import { Dashboard, LocationCityRounded } from "@mui/icons-material";
import Redflag from "./components/SignupSignin/components/user/dashboard/Redflag";
import Intervention from "./components/SignupSignin/components/user/Intervention";
import Redesign from "./components/SignupSignin/components/user/dashboard/Redesign";
import UserProfile from "./components/SignupSignin/components/user/dashboard/UserProfile";
import LandingPage from "./components/HOME/LandingPage";
// import {handleSubmit} from "../src/components/SignupSignin/components/user/team/index"


// import Routlinks from "./components/SignupSignin/components/Routlinks"

const API_endpoint = "https://api.bigdatacloud.net/data/reverse-geocode-client?"
// const API_key = "ad2aa03a77f5cd002cb2327cfb16e947"

const To = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en"
function App() {
const[latitude, setlatitude]= useState('');
const[longitude, setlongitude]= useState('');
const [exactLocation,setexactLocation]= useState('');
// const getUserData = handleSubmit();
// const [userdata, setUserdata]= useState(getUserData);

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
  fetch(`${To}`)
  .then((res)=>res.json())
  .then((res)=> setexactLocation(res.principalSubdivision))
  
};

}

useEffect(() =>{

getLocation()
},[])





  const [user, setUser] = useState("");
  const [userinputs, setuserInput] = useState([]);

  // Auto login and keeps user logged in
  useEffect(() => {
    fetch('https://irep-backend.herokuapp.com/profile')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => setUser(user))
      }
    })
  }, []) 
console.log(user)


// Fetch user posts
  useEffect(() => {
    fetch('https://irep-backend.herokuapp.com/incidents')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((data) => setuserInput(data))
      }
    })
  }, []) 



   function handleAddArticle(userinput) {
    setuserInput(userinput, ...userinputs)
  }
// console.log(userinputs);

  // if(!user) return <SignIn onlogin={setUser} />
// console.log(userinputs)
  return (
    <div>
      <Navbar/>
      
{/*      
        <Route exact path="*" element={<Navbar />} /> */}
        <Routes> 
      
          <Route
            exact
            path="/"
            element={
              <div>
                <Slide />
                <LandingPage/>
                {/* <About />
                <Partners />
               <Testimonials /> 
                <Cases />
                <Testimonials/>
                <Footer />  */}
              </div>
            }
          />

          <Route exact path="/about" element={<About longitude={longitude} latitude={latitude} exactLocation={exactLocation}/>} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route exact path="/cases" element={<Cases />} />
     
          <Route exact path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            exact
            path="/signup"
            element={<CreateAccount setUser={setUser} />}
          />
          {/* <Route exact path="/admin" element={<Adminroutlinks  />} /> */}
          <Route exact path="/user" element={<Routlinks userinputs={userinputs} />}/>
          <Route exact path="/team" element={<Team addUserPost={handleAddArticle} location={exactLocation}/>} />
          <Route exact path="/admin" element={<Redesign userinputs={userinputs}/>} />
  <Route exact path="/user/:id" element={<UserProfile userinputs={userinputs} setuserInput={setuserInput}  user={user}/>} />
      
       

        </Routes>
    
    </div>
  );
}
export default App;
