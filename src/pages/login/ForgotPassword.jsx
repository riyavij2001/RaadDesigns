import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const onForgotPasswordClicked = async (e) => {
    e.preventDefault();
    const Userdata = { email };
    try {
      const res = await axios.post(
        "http://localhost:5000/forgotPassword",
        Userdata
      );
      alert(res.data);
      setMessage("Please check your inbox for the verification link");
    } catch (err) {
      console.error(err.response.data);
      alert("User with this email does not exists");
    }
  };

  return (
    <div className="bg-[#262425] text-[#E0CCBE] min-h-screen">
      <Navbar />

      <div className="items-center flex flex-col justify-center bg-[#E0CCBE] p-16 w-[55vw] m-auto mt-20">
        {!message && (
          <div>
            <h2 className="text-xl font-semibold p-4 text-[#262425]">
              Forgot Your Password?
            </h2>
            <h5 className=" font-semibold pb-7 text-[#262425]">
              Enter Your Email Address to Receive a Verification Link.
            </h5>

            <form
              onSubmit={onForgotPasswordClicked}
              className="flex flex-col gap-4"
            >
              <label className="bg-[#262425] text-[#E0CCBE] input input-bordered flex items-center gap-2 p-2">
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
                  type="email"
                  className="grow text-[#E0CCBE] bg-[#262425]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <button
                type="submit"
                className="btn bg-[#262425] text-[#E0CCBE]"
                disabled={!email}
                style={{ color: !email ? "#262425" : "#E0CCBE" }}
              >
                Send Verification Link
              </button>
            </form>
          </div>
        )}

        {message && <p className="text-[red] pb-6">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
