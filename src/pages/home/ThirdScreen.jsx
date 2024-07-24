import insta from "/static/images/insta.png";
import fb from "/static/images/fb.png";
import twitter from "/static/images/twitter.png";
import Point1 from "/static/images/Point1.jpeg";
import Point2 from "/static/images/Point2.jpeg";
import Point3 from "/static/images/Point3.jpeg";
import Point4 from "/static/images/Point4.jpeg";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3D-card";

function ThirdScreen() {
  return (
    <div className=" bg-[#262425] bg-center bg-cover text-[#E0CCBE]">
      <div className=" flex ">
        <div className=" mt-[5vh] w-[80vw] ml-6 md:ml-16 lg:ml-[20vh] mt-[10vh]">
          <div className="  items-center justify-center text-center ">
            <h1 className=" lg:text-3xl text-xl">How RaaD Designs Works</h1>
            <br />
            <p className=" mb-8">
              A Peek into RaaD's Innovative Approach to Interior Design, Where
              Every Pixel Tells a Story.
            </p>
          </div>
          <div className=" lg:flex lg:flex-row">
            <div className=" flex">
              <div className=" lg:m-[4vh] lg:text-[6vh] flex font-bold lg:font-normal">
                01
              </div>
              <div className=" flex flex-col ml-5 lg:ml-[10vh] lg:w-[60vh] text-justify">
                <div className=" lg:text-[4vh] lg:mb-[3vh] font-semibold lg:font-normal">
                  Discover Inspiration
                </div>
                <div>
                  Explore our curated collection of designs and match with one
                  of our talented designers to spark your creativity. With
                  decades of collective experience, our team will help you
                  refine your style and visualize your design dreams.
                </div>
              </div>
            </div>
            <div className=" lg:ml-[10vh] lg:mt-0 ml-60 mt-6">
              <CardContainer className="">
                <CardBody
                  className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl  "
                  style={{ paddingTop: 0 }}
                >
                  <CardItem translateZ="100" className=" bg-cover bg-center">
                    <div
                      style={{
                        backgroundImage: `url(${Point1})`,
                        // width: "45vh",
                        // height: "45vh",
                        borderRadius: "0.75rem",
                        backgroundSize: "cover",
                      }}
                      className=" lg:w-[45vh] lg:h-[45vh] w-[20vh] h-[20vh]"
                    ></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>

          <div className=" lg:flex lg:flex-row lg:mt-0 -mt-40 lg:-ml-1">
            <div className=" flex">
              <div className="lg:m-[4vh] lg:text-[6vh] flex font-bold lg:font-normal">
                02
              </div>
              <div className=" flex flex-col ml-5 lg:ml-[10vh] lg:w-[60vh] text-justify">
                <div className=" lg:text-[4vh] lg:mb-[3vh] font-semibold lg:font-normal">
                  Personalized Collaboration
                </div>
                <div>
                  Embark on a collaborative journey with your dedicated designer
                  to bring your vision to life. From concept to creation, we'll
                  work closely with you to craft a space that reflects your
                  personality and meets your functional needs, ensuring every
                  pixel tells your unique story.
                </div>
              </div>
            </div>
            <div className=" lg:ml-[10vh] lg:mt-0 ml-60 mt-6">
              <CardContainer className="">
                <CardBody
                  className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl  "
                  style={{ paddingTop: 0 }}
                >
                  <CardItem translateZ="100" className=" bg-cover bg-center">
                    <div
                      style={{
                        backgroundImage: `url(${Point2})`,
                        //   width: "45vh",
                        //   height: "45vh",
                        borderRadius: "0.75rem",
                        backgroundSize: "cover",
                      }}
                      className=" lg:w-[45vh] lg:h-[45vh] w-[20vh] h-[20vh]"
                    ></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className=" lg:flex lg:flex-row lg:mt-0 -mt-40 lg:-ml-1">
            <div className=" flex">
              <div className="lg:m-[4vh] lg:text-[6vh] flex font-bold lg:font-normal">
                03
              </div>
              <div className=" flex flex-col ml-5 lg:ml-[10vh] lg:w-[60vh] text-justify">
                <div className=" lg:text-[4vh] lg:mb-[3vh] font-semibold lg:font-normal">
                  Visualize Your Space
                </div>
                <div>
                  Experience your design in stunning detail with our 3D
                  rendering technology. See your space come to life as you
                  explore different layouts, furniture arrangements, and color
                  palettes, giving you the confidence to bring your design home.
                </div>
              </div>
            </div>
            <div className=" lg:ml-[10vh] lg:mt-0 ml-60 mt-6">
              <CardContainer className="">
                <CardBody
                  className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl  "
                  style={{ paddingTop: 0 }}
                >
                  <CardItem translateZ="100" className=" bg-cover bg-center">
                    <div
                      style={{
                        backgroundImage: `url(${Point3})`,
                        //   width: "45vh",
                        //   height: "45vh",
                        borderRadius: "0.75rem",
                        backgroundSize: "cover",
                      }}
                      className=" lg:w-[45vh] lg:h-[45vh] w-[20vh] h-[20vh]"
                    ></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className=" lg:flex lg:flex-row lg:mt-0 -mt-40 lg:-ml-1">
            <div className=" flex">
              <div className="lg:m-[4vh] lg:text-[6vh] flex font-bold lg:font-normal">
                04
              </div>
              <div className=" flex flex-col ml-5 lg:ml-[10vh] lg:w-[60vh] text-justify">
                <div className=" lg:text-[4vh] lg:mb-[3vh] font-semibold lg:font-normal">
                  Seamless Implementation
                </div>
                <div>
                  Once you're satisfied with your design, bring it to life with
                  ease. Our designers source from a diverse range of trusted
                  brands, ensuring your space is as unique as you are. With our
                  streamlined platform and price guarantee, transforming your
                  space has never been easier.
                </div>
              </div>
            </div>
            <div className=" lg:ml-[10vh] lg:mt-0 ml-60 mt-6">
              <CardContainer className="">
                <CardBody
                  className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] rounded-xl  "
                  style={{ paddingTop: 0 }}
                >
                  <CardItem translateZ="100" className=" bg-cover bg-center">
                    <div
                      style={{
                        backgroundImage: `url(${Point4})`,
                        //   width: "45vh",
                        //   height: "45vh",
                        borderRadius: "0.75rem",
                        backgroundSize: "cover",
                      }}
                      className=" lg:w-[45vh] lg:h-[45vh] w-[20vh] h-[20vh]"
                    ></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdScreen;
