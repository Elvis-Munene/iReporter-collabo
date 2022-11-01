import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./navbars/Topbar";
import Sidebar from "./navbars/Sidebar";
import Dashboard from "./dashboard";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function Adminroutlinks({userposts}) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
// console.log(userposts);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            
             </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Adminroutlinks;