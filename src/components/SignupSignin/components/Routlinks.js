import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./user/navbars/Topbar";
import Sidebar from "./user/navbars/Sidebar";
import Dashboard from "./user/dashboard/Dashboard";
import Team from "./user/team";
// import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./user/rroute.css"


function Routlinks({userinputs}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
console.log(userinputs);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <div theme={theme}>
        {/* <CssBaseline /> */}
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/dashboard"  element={<Dashboard  userinputs={userinputs}/>} /> */}
              <Route path="/team" element={<Team />} />
             </Routes>
       
          </main>
        </div>
      </div>
    </ColorModeContext.Provider>
  );
}

export default Routlinks;
