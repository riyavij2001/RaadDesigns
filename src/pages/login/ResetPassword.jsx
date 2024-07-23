import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (location.state && location.state.password) {
      setPassword(location.state.password);
    }
  }, [location.state]);

  const onResetPasswordClicked = async (e) => {
    e.preventDefault();
    const userData = { password };
    if (confirmPassword != password) {
      alert("Password and confirm password does not match.");
    } else {
      try {
        const res = await axios.post(
          `http://localhost:5000/resetPassword?token=${resetToken}`,
          userData
        );
        setMessage(res.data);
        navigate("/home");
      } catch (err) {
        console.error(err.response.data);
        setMessage("Error verifying OTP");
      }
    }
  };

  return (
    <div className="bg-[#262425] text-[#E0CCBE] min-h-screen">
      <Navbar />
      <div className="items-center flex flex-col justify-center bg-[#E0CCBE] p-16 w-[50vw] m-auto mt-20">
        <h2 className="text-xl font-semibold p-6 text-[#262425]">
          Reset your password
        </h2>
        {message && <p className="text-[#262425]">{message}</p>}
        <form onSubmit={onResetPasswordClicked} className="flex flex-col gap-4">
          <label className="bg-[#262425] text-[#E0CCBE] input input-bordered flex items-center gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5z"
                fill="currentColor"
              />
            </svg>

            <input
              type="password"
              className="grow text-[#E0CCBE] bg-[#262425]"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="bg-[#262425] text-[#E0CCBE] input input-bordered flex items-center gap-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              class="w-6 h-6"
            >
              <path
                d="M8 1a3 3 0 0 0-3 3v3H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2V4a3 3 0 0 0-3-3zm1 6H7V4a2 2 0 1 1 4 0v3h-2V7zM4 8h8a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1z"
                fill="currentColor"
              />
            </svg>

            <input
              type="text"
              className="grow text-[#E0CCBE] bg-[#262425]"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="btn bg-[#262425] text-[#E0CCBE]"
            disabled={!password || !confirmPassword}
            style={{
              color: !password || !confirmPassword ? "#262425" : "#E0CCBE",
            }}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
