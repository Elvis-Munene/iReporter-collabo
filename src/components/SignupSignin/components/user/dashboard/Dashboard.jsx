import React, { useState, useEffect } from "react";
import Intervention from "../Intervention";
import "./dashboard.css"
import Redflag from "./Redflag"


const Dashboard = ({userinputs}) => {
const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://[::1]:3000/incidents')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((data) => setData(data))
      }
    })
  }, []) 





  console.log(data)
  return (
   <div>
<h2>Your Records eggtrgrtgetrtgrtgtttttttt</h2>
      <Redflag userinputs={userinputs}/>
      <Intervention userinputs={userinputs}/>
    </div>         
  );
};

export default Dashboard;
