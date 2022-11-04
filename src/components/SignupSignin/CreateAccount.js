import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"


function CreateAccount({ setUser }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();



  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://irep-backend.herokuapp.com/users", {
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
          navigate("/user")
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
    <>
      <div className="bg-slate-900 min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto" src="https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg" alt="logo" />
         
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
            
              <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name</label>
              {/* <div className="mt-1"> */}
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        {/* </div> */}
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                {/* <div className="mt-1"> */}
                  <input
                     type="text"
                     id="username"
                     autoComplete="off"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                  />
                {/* </div> */}
              

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                {/* <div className="mt-1"> */}
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                  />
                </div>
              {/* </div> */}

              
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                {/* <div className="mt-1"> */}
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                  />
                </div>
              {/* </div> */}

              <div>
                <label
                  htmlFor="password confirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password confirmation
                </label>
                {/* <div className="mt-1"> */}
                  <input
                    type="password"
                    id="password_confirmation"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                  />
                </div>
              {/* </div> */}


              {msg ? (
          <div className="error-msg">
            <h5 className="error-text">Error!.</h5>
          </div>
        ) : null}

              {/* <div> */}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color"
                >
                  Sign up
                </button>
                <p className="py-4 md:text-sm lg:text-base  text-center">
                    Already have an account?{" "}
                    <Link to="/signin" className="underline text-primary-color">
                      Sign in.
                    </Link>
                </p>
              {/* </div> */}
         
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
};



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
