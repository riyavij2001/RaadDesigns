import insta from '/static/images/insta.png'
import fb from '/static/images/fb.png'
import twitter from '/static/images/twitter.png'
import Pic from '/static/images/Pic2.jpg'


function ThirdScreen() {
    return (
        <div className=' bg-[#262425] bg-center bg-no-repeat h-screen bg-cover text-[#E0CCBE]'>
            <div className=' flex '>
                <div className=' mt-[10vh]'>
                    <div className='  items-center justify-center text-center ml-[50vh]'>
                        <h1 className='  text-3xl'>How RaaD Designs Works</h1>
                        <br />
                        <p className=' mb-8'>A Peek into RaaD's Innovative Approach to Interior Design, Where Every Pixel Tells a Story.</p>
                    </div>
                    <div className=' w-[80vw] ml-[10vh]'>
                        <div className=' flex flex-row'>
                            <div className=' m-[4vh] text-[6vh]'>01</div>
                            <div className=' flex flex-col ml-[10vh] w-[60vh]'>
                                <div className=' text-[4vh]'>Match with one of our talented designers and get inspired.</div>
                                <div>With 10 years of experience in all 50 states and 100,000+ designs, we'll help you hone your style, get inspired, and realize your design dreams for your specific space.</div>
                            </div>
                            <div>
                                <img src={Pic}></img>
                                
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
