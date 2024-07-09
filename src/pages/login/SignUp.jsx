import React, { useState } from "react";
import Navbar from "../../Navbar";
import axios from "axios";

function SignUp() {

  const [errorMessage, setErrorMessage] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onSignupClicked = async (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      email: email,
      password: password
    };
    try {
      const res = await axios.post('http://localhost:5000/signUp', userData);
      console.log(res.data); // Handle success response
      const { token } = res.data; 
      localStorage.setItem('token', token);
    } catch (err) {
      console.error(err.response.data); // Handle error response
    }
  }

  return (
    <div className=" bg-[#262425] text-[#E0CCBE]">
      <Navbar />
      <div className="items-center flex flex-col justify-center bg-[#E0CCBE] p-16 w-[50vw] m-auto mt-20">
        <h2 className="  text-xl font-semibold p-6 text-[#262425]">
          SignUp <span className=" italic text-[#262425]">&</span> Step into Your
          Dream Space
        </h2>
        {errorMessage && <alert>{errorMessage}</alert>}
        <label className="bg-[#262425] m-6 text-[#E0CCBE] input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow text-[#E0CCBE]"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          
        </label>
        <label className="bg-[#262425] m-6 text-[#E0CCBE] input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow text-[#E0CCBE]"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          
        </label>
        {/* <label className="bg-[#E0CCBE] m-6 text-[#262425] input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Username" />
        </label> */}
        <label className="bg-[#262425] m-6 text-[#E0CCBE] input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow text-[#E0CCBE]"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
        </label>
        <label className="bg-[#262425] m-6 text-[#E0CCBE] input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow text-[#E0CCBE]"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          
        </label>
        <button disabled={!email || !password || !confirmPassword || !name} style={{color:!email || !password || !confirmPassword || !name ? "#262425":"#E0CCBE"}} className="btn bg-[#262425] text-[#E0CCBE]" onClick={onSignupClicked}>Sign Up</button>
        <a className=" text-[#262425] p-7" href="/login">
          Already have an account? LogIn here
        </a>
      </div>
    </div>
  );
}

export default SignUp;
