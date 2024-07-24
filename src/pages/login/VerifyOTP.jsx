import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const onVerifyOtpClicked = async (e) => {
    e.preventDefault();
    const otpData = { email, otp };
    try {
      const res = await axios.post("http://localhost:5000/verify-otp", otpData);
      setMessage(res.data);
      const { token } = res.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (err) {
      console.error(err.response.data);
      setMessage("Error verifying OTP");
    }
  };

  return (
    <div className="bg-[#262425] text-[#E0CCBE] min-h-screen">
      <Navbar />
      <div className="items-center flex flex-col justify-center bg-[#E0CCBE] p-16 w-[50vw] m-auto mt-20">
        <h2 className="text-xl font-semibold p-6 text-[#262425]">
          Verify OTP to Confirm Your Account
        </h2>
        {message && <p className="text-[#262425]">{message}</p>}
        <form onSubmit={onVerifyOtpClicked} className="flex flex-col gap-4">
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
          <label className="bg-[#262425] text-[#E0CCBE] input input-bordered flex items-center gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z" />
            </svg>
            <input
              type="text"
              className="grow text-[#E0CCBE] bg-[#262425]"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="btn bg-[#262425] text-[#E0CCBE]"
            disabled={!email || !otp}
            style={{ color: !email || !otp ? "#262425" : "#E0CCBE" }}
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
