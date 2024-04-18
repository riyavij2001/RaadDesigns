import insta from '/static/images/insta.png'
import fb from '/static/images/fb.png'
import twitter from '/static/images/twitter.png'
import Point1 from '/static/images/Point1.jpeg'
import Point2 from '/static/images/Point2.jpeg'
import Point3 from '/static/images/Point3.jpeg'
import Point4 from '/static/images/Point4.jpeg'



function ThirdScreen() {
    return (
        <div className=' bg-[#262425] bg-center bg-cover text-[#E0CCBE]'>
            <div className=' flex '>
                <div className=' mt-[5vh]'>
                    <div className='  items-center justify-center text-center ml-[25vh]'>
                        <h1 className='  text-3xl'>How RaaD Designs Works</h1>
                        <br />
                        <p className=' mb-8'>A Peek into RaaD's Innovative Approach to Interior Design, Where Every Pixel Tells a Story.</p>
                    </div>
                    <div className=' w-[80vw] ml-[15vh] mt-[10vh]'>
                        <div className=' flex flex-row'>
                            <div className=' m-[4vh] text-[6vh]'>01</div>
                            <div className=' flex flex-col ml-[10vh] w-[70vh]'>
                                <div className=' text-[4vh] mb-[3vh]'>Discover Inspiration</div>
                                <div>Explore our curated collection of designs and match with one of our talented designers to spark your creativity. With decades of collective experience, our team will help you refine your style and visualize your design dreams.</div>
                            </div>
                            <div className=' ml-[10vh]'>
                                <img className=' rounded-lg w-[60vh] h-[40vh]' src={Point1}></img>

                            </div>
                        </div>
                    </div>
                    <div className=' w-[80vw] ml-[15vh] mt-[10vh]'>
                        <div className=' flex flex-row'>
                            <div className=' m-[4vh] text-[6vh]'>02</div>
                            <div className=' flex flex-col ml-[10vh] w-[70vh]'>
                                <div className=' text-[4vh] mb-[3vh]'>Personalized Collaboration</div>
                                <div>Embark on a collaborative journey with your dedicated designer to bring your vision to life. From concept to creation, we'll work closely with you to craft a space that reflects your personality and meets your functional needs, ensuring every pixel tells your unique story.</div>
                            </div>
                            <div className=' ml-[10vh]'>
                                <img className=' rounded-lg w-[60vh] h-[40vh]' src={Point2}></img>

                            </div>
                        </div>
                    </div>
                    <div className=' w-[80vw] ml-[15vh] mt-[10vh]'>
                        <div className=' flex flex-row'>
                            <div className=' m-[4vh] text-[6vh]'>03</div>
                            <div className=' flex flex-col ml-[10vh] w-[70vh]'>
                                <div className=' text-[4vh] mb-[3vh]'>Visualize Your Space</div>
                                <div>Experience your design in stunning detail with our 3D rendering technology. See your space come to life as you explore different layouts, furniture arrangements, and color palettes, giving you the confidence to bring your design home.</div>
                            </div>
                            <div className=' ml-[10vh]'>
                                <img className=' rounded-lg w-[60vh] h-[40vh]' src={Point3}></img>

                            </div>
                        </div>
                    </div>
                    <div className=' w-[80vw] ml-[15vh] mt-[10vh]'>
                        <div className=' flex flex-row'>
                            <div className=' m-[4vh] text-[6vh]'>04</div>
                            <div className=' flex flex-col ml-[10vh] w-[70vh]'>
                                <div className=' text-[4vh] mb-[3vh]'>Seamless Implementation</div>
                                <div>Once you're satisfied with your design, bring it to life with ease. Our designers source from a diverse range of trusted brands, ensuring your space is as unique as you are. With our streamlined platform and price guarantee, transforming your space has never been easier.</div>
                            </div>
                            <div className=' ml-[10vh]'>
                                <img className=' rounded-lg w-[60vh] h-[40vh]' src={Point4}></img>

                            </div>
                        </div>
                    </div>
                </div>

                <div className=' flex md:flex md:flex-grow flex-row justify-end sticky right-0 text-[#E0CCBE] top-64 h-16 w-16'>
                    <div className=' bg-[#3C2D1E] h-36 w-10 flex md:flex md:flex-col justify-center text-[#E0CCBE]'>
                        <a className=' p-2 h-10 w-10' href=""> <img src={insta} alt="" /> </a>
                        <a className=' p-2 h-10 w-10' href=""> <img src={fb} alt="" /> </a>
                        <a className=' p-2 h-10 w-10' href=""> <img src={twitter} alt="" /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdScreen
