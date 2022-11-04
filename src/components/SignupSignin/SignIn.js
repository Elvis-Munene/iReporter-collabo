import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import sign from "./sign.css"

function SignIn({ setUser }) {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState(null);
 const navigate = useNavigate();


 


 


  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://irep-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setUser(data.user)
          setRole(data.user_type)
        localStorage.setItem('user',JSON.stringify(data.user));
        {data.user.user_type === 'admin' ?  navigate('/admin') : navigate('/user')}
        // navigate(role? "/user":"/admin")
        });
        

      } else setMsg("Invalid Username or Password");
    });
  }

  return (
    <>
    <div className=" bg-slate-900 bg-no-repeat bg-cover  h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://previews.123rf.com/images/ijacky/ijacky1309/ijacky130900606/22337481-fist-of-kenya-flag-painted-multi-purpose-concept-isolated-on-white-background.jpg" alt="logo" />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-500"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-color focus:border-primary-color sm:text-sm"
                />
              </div>
            </div>
            <div>
            {msg ? (
          <div className="error-msg">
            <h5 className="error-text">Invalid username or password!!.</h5>
          </div>
        ) : // <h6><a href="">forgot password</a></h6>
        null}
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
              >
                Sign in
              </button>
              <p className="py-2 text-center">
                  Don't have an account yet?{" "}
                  <Link to="/signup" className="underline text-primary-color">
                    Sign up.
                  </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
);
};

export default SignIn;
