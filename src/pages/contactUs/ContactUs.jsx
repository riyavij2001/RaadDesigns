import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Pic1 from "/static/images/Collage4.jpeg";
import Footer from "../../Footer";
import axios from "axios";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");

  const handleSubmit = () => {
    const userData = {
      // axios.post('http://localhost:5000/register',{
      name: name,
      email: email,
      phoneNumber: phone,
      concern: concern,
    };
    axios.post("http://localhost:5000/contactUs", userData).then((response) => {
      console.log(response.status, response.data.token);
    });
    setName("");
    setEmail("");
    setPhone("");
    setConcern("");
  };

  return (
    <div className=" bg-[#262425] w-full">
      <Navbar />
      <div class=" ">
        <div>
          <div className=" text-[#E0CCBE] items-center justify-center text-center">
            <h1 className=" text-4xl">
              Let's Connect and Create Magic Together
            </h1>
          </div>
          <div className=" pt-16">
            <div className="flex h-[70vh] w-full">
              <div className="grid h-10 card rounded-box place-items-center">
                <img className=" h-[70vh] w-[40vw] p-10" src={Pic1} alt="" />
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="grid h-20 w-[40vw] card rounded-box place-items-center">
                <label className="form-control w-[40vw] ml-[230px] mt-[20px]">
                  <div className="label">
                    <span className="label-text text-[#E0CCBE]">
                      What is your name?
                    </span>
                  </div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your Name"
                    className="input input-bordered w-full max-w-xs bg-[#E0CCBE] text-black"
                  />
                </label>
                <label className="form-control w-[40vw] ml-[230px] mt-[20px]">
                  <div className="label">
                    <span className="label-text text-[#E0CCBE]">
                      What is your email Id?
                    </span>
                  </div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email Id"
                    className="input input-bordered w-full max-w-xs bg-[#E0CCBE] text-black"
                  />
                </label>
                <label className="form-control w-[40vw] ml-[230px] mt-[20px]">
                  <div className="label">
                    <span className="label-text text-[#E0CCBE]">
                      What is your phone number?
                    </span>
                  </div>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="Enter your phone number"
                    className="input input-bordered w-full max-w-xs bg-[#E0CCBE] text-black"
                  />
                </label>
                <label className="form-control w-[40vw] ml-[230px] mt-[20px]">
                  <div className="label">
                    <span className="label-text text-[#E0CCBE]">
                      What is your concern?
                    </span>
                  </div>
                  <input
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    type="text"
                    placeholder="Enter your concern"
                    className="input input-bordered w-full max-w-xs bg-[#E0CCBE] text-black"
                  />
                </label>
                <button
                  onClick={handleSubmit}
                  className="btn bg-[#262425] border-[#E0CCBE] text-[#E0CCBE] mt-12 mr-14 hover:bg-[#E0CCBE] hover:text-[#262425]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

//http://localhost:5000/register post req

export default ContactUs;
