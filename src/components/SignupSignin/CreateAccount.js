import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"


function CreateAccount({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://[::1]:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
        password,
        password_confirmation,
      }),
    }).then((r) => {
      if (r.ok) {


        r.json().then((data) => {
          setUser(data.user)
          localStorage.setItem('token', data.jwt);
          navigate("/admin")
        });
      } else setMsg("*Password should be identical and username unique");
      // r.json().then(console.log)
      // r.json().then((msg) => setMsg(msg))
    });
  }
  // function decode(array){
  //   for (item of array){
  //     console.log(array[0])
  //   }

  // }

  return (
    <div className="form_container">
      <form className="form_signup" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        {/* name */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* username */}
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Email */}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
        />

        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
          autoComplete="current-password"
        />

        {msg ? (
          <div className="error-msg">
            <h5 className="error-text">Error!.</h5>
          </div>
        ) : null}
        <button className="s-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;

// import { useState} from "react";
// import styled from 'styled-components';

// function CreateAccount() {

// const App = styled.div`
// text-align: center;
// background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('https://content.presentermedia.com/content/animsp/00004000/4786/kenya_flag_perspective_anim_300_wht.gif');
// background-repeat: no;

// `
// const Styledlabel = styled.label`
// display: block;
// font-size: larger;
// color: black;
// padding: 5px;
// `
// const Styledinput = styled.input`
// font-size: larger;
// padding: 5px;
// margin: 2px;
// color:black;
// `
// const Styledbutton = styled.button`
// color: white;
// background-color: red;
// border-radius: 5px;
// font-size: larger;
// display: block;
// padding: 5px;
// margin: 10px auto;
// `
// const Imagepositioning = styled.div`
// padding: 10px;
// `
// const Styledmessages = styled.div`
// display: flex;
//   justify-content: center;`

// const Stylederrors = styled.div`
// display: block;
// background-color: red;
// color: black;
// width: fit-content;
// height: 50px;
// padding: 5px;
// `
// const Styledsuccess = styled.div`
// display: block;
//   background-color: lightblue;
//   color: black;
//   width: fit-content;
//   height: 50px;
//   padding: 5px;
// `
// // States for registration
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// console.log(name);
// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// // const handleName = (e) => {
// // setName(e.target.value);
// // };

// // Handling the email change
// const handleEmail = (e) => {
// setEmail(e.target.value);
// };

// // Handling the password change
// const handlePassword = (e) => {
// setPassword(e.target.value);

// };

// // Handling the form submission
// const handleSubmit = (e) => {
// e.preventDefault();
// if (name === '' || email === '' || password === '') {
// setError(true);
// } else {
// setSubmitted(true);
// setError(false);
// }
// };

// // Showing success message
// const successMessage = () => {
// return (
// <Styledsuccess
// className="success"
// style={{
// display: submitted ? '' : 'none',
// }}>
// <h1>User {name} successfully registered!!</h1>
// </Styledsuccess>
// );
// };

// // Showing error message if error is true
// const errorMessage = () => {
// return (
// <Stylederrors
// className="error"
// style={{
// display: error ? '' : 'none',
// }}>
// <h1>Please enter all the fields</h1>
// </Stylederrors>
// );
// };

// return (

// <div>
//   <div className="form">
// <h1><img src='../images/mkono.png' alt="" width={100} height={100} /></h1>
// {/* Calling to the methods */}
// <Styledmessages className="messages">
// {errorMessage()}
// {successMessage()}
// </Styledmessages>
// <form>
// {/* Labels and inputs for form data */}
// <label className="label"> Username</label>
// <input type="text" />

// <label className="label">Email</label>
// < input  type="email" />

// <label className="label">Phone Number</label>

// <label className="label">Password</label>
// < input type="password" />

// <label className="label">Password Confirmation</label>
// < input type="password" />

// <button>CreateAccount</button>
// {/* <Styledbutton onClick={handleSubmit} className="btn" type="submit">
// Login</Styledbutton> */}
// <div>Do you have an account? Login</div>
// </form>

// </div>
// </div>
// );
// }
// export default CreateAccount
