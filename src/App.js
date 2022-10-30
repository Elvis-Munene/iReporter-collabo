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
import { useState } from "react";

// import Routlinks from "./components/SignupSignin/components/Routlinks"

function App() {
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

          <Route exact path="/about" element={<About />} />
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
