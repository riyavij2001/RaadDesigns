import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import HomeDecor from "../shop/TabContents/HomeDecor";
import Collage1 from "/static/images/Collage1.png";
import Collage2 from "/static/images/Collage2.jpeg";
import Collage3 from "/static/images/Collage3.jpeg";
import Collage4 from "/static/images/Collage4.jpeg";
import sofa from "/static/images/sofa.png";
import plant from "/static/images/plant.png";
import curtains from "/static/images/curtains.png";

function Aboutus() {
  return (
    <div className=" !scroll-smooth">
      <div>
        <Navbar />
      </div>
      <div className=" bg-[#262425] w-full">
        <div class="w-full p-[10vh]">
          <div>
            <div className=" text-[#E0CCBE] items-center justify-center text-center">
              <h1 className=" text-4xl">
                Unveiling the Art of Interior Design
              </h1>
              <br />
              <p className=" mb-8">
                Welcome to RaaD Designs, where creativity meets innovation to
                transform spaces into stunning works of art. Our passion for
                design and dedication to excellence drive us to create interiors
                that are not only visually captivating but also functional and
                inspiring.
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className=" grid grid-cols-2 gap-0">
            <div>
              <div className=" text-[#E0CCBE] items-center justify-center text-center w-[40vw]">
                <h1 className=" text-3xl">Our Vision</h1>
                <br />
                <p className="">
                  At RaaD Designs, we believe that every space has a story to
                  tell. Our vision is to craft environments that reflect the
                  unique personalities and lifestyles of our clients. We strive
                  to bring your dreams to life by blending aesthetics with
                  practicality, ensuring that every project we undertake is a
                  true reflection of your vision and our expertise.
                </p>
                <div className=" h-36 w-30 flex md:flex md:flex-row items-center justify-center">
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={sofa} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={plant} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={curtains} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <img src={Collage1} alt="" />
            <img src={Collage3} alt="" />
            <div>
              <div className=" text-[#E0CCBE] items-center justify-center text-center w-[40vw] mt-10 ml-16">
                <h1 className=" text-3xl">Our Approach</h1>
                <br />
                <p className="">
                  Our interior design approach starts with understanding our
                  clients' needs and desires. We begin each project with a
                  thorough consultation to grasp your vision. Then, our talented
                  designers collaboratively develop a concept tailored to your
                  preferences and lifestyle.
                </p>
                <div className=" h-36 w-30 flex md:flex md:flex-row items-center justify-center">
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={sofa} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={plant} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={curtains} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className=" text-[#E0CCBE] items-center justify-center text-center w-[40vw] mt-10">
                <h1 className=" text-3xl">Our Expertise</h1>
                <br />
                <p className="">
                  With years of experience in the industry, our team at RaaD
                  Designs has honed their skills in various aspects of interior
                  design. From space planning and color consultation to
                  furniture selection and custom installations, we offer a full
                  spectrum of services to meet your design needs.
                </p>
                <br />
                <p className="">
                  Our expertise extends to residential design, creating warm and
                  inviting homes that reflect your personality; commercial
                  design, designing functional and aesthetically pleasing
                  workspaces; hospitality design, crafting luxurious and
                  memorable environments for hotels and restaurants; and retail
                  design, developing engaging and attractive retail spaces.
                </p>
                <br />
                <p className="">
                  At RaaD Designs, we don't just design spaces; we create
                  experiences that leave a lasting impression.
                </p>
                <div className=" h-36 w-30 flex md:flex md:flex-row items-center justify-center">
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={sofa} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={plant} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={curtains} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <img src={Collage2} alt="" />
            <img src={Collage4} alt="" />
            <div>
              <div className=" text-[#E0CCBE] items-center justify-center text-center w-[40vw] mt-10 ml-16">
                <h1 className=" text-3xl">Why Choose Us?</h1>
                <br />
                <p className="">
                  Innovative designs are at the heart of RaaD Designs, keeping
                  us at the forefront of the industry with the latest trends and
                  techniques. We pride ourselves on offering personalized
                  service, ensuring that each project is tailored to meet your
                  specific needs and preferences. Collaborating with skilled
                  artisans and craftsmen, we guarantee quality craftsmanship in
                  every detail, bringing your vision to life with precision and
                  care. Furthermore, our commitment to sustainable practices
                  underscores our dedication to creating eco-friendly designs
                  that inspire while promoting environmental responsibility.
                </p>
                <br />
                <p className="">
                  As Steve Jobs famously said, <span className=" italic font-semibold text-[#725641]"> "Design is not just what it looks
                  like and feels like. Design is how it works."</span> At RaaD Designs,
                  we believe in designing spaces that not only look beautiful
                  but also function seamlessly, enhancing your everyday living
                  experience.
                </p>
                <div className=" h-36 w-30 flex md:flex md:flex-row items-center justify-center">
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={sofa} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={plant} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={curtains} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className=" text-[#E0CCBE] items-center justify-center text-center w-[40vw] mt-10">
                <h1 className=" text-3xl">Join Us on a Design Journey</h1>
                <br />
                <p className="">
                  At RaaD Designs, we are more than just designers; we are
                  storytellers. Let us help you tell your story through
                  beautiful, functional, and inspiring interiors. Join us on a
                  journey where creativity knows no bounds, and every space
                  becomes a masterpiece.
                </p>
                <div className=" h-36 w-30 flex md:flex md:flex-row items-center justify-center">
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={sofa} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={plant} alt="" />{" "}
                  </a>
                  <a className=" p-2 h-10 w-10" href="/shop">
                    {" "}
                    <img src={curtains} alt="" />{" "}
                  </a>
                </div>
              </div>
            </div>
            <img src={Collage1} alt="" />
          </div>
          <div>
            <div className=" text-[#E0CCBE] items-center justify-center text-center mt-16">
              <h1 className=" text-3xl">Let's Get Real</h1>
              <br />
              <p className=" mb-8">
                Hey there, future design icon! Are you ready to level up your
                space game? At RaaD Designs, we don’t just follow trends—we set
                them. Think of us as your personal design squad, here to turn
                your Pinterest dreams into jaw-dropping reality. From chill
                vibes to luxe feels, we’ve got you covered. Swipe right on a
                design journey with us, and let’s create a space that’s as
                unique and lit as you are. Ready to make some magic? Let’s do
                this!
              </p>
              <br />
              <p className=" mb-8">
                Explore our portfolio, get inspired, and contact us today to
                start your design journey with RaaD Designs. Together, we will
                create spaces that you will love to live, work, and play in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
