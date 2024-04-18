import insta from '/static/images/insta.png'
import fb from '/static/images/fb.png'
import twitter from '/static/images/twitter.png'
import lipstick_bg from '/static/images/lipstick_bg.jpg'


function FirstScreen() {
  return (
    <div className=' bg-bg bg-center bg-no-repeat h-screen bg-cover'>
      <div className=' flex'>
        <div className=' bg-black bg-opacity-70 m-36 p-14 text-[#E0CCBE] h-64 w-1/3 items-center flex flex-col justify-center text-center'>
          <h1 className=' mb-3 text-3xl'>Let your home be unique</h1>
          <p className=' mb-8'>A room should never allow the eye to settle in one place. It should smile at you and create fantasy.</p>
          <button className=' bg-[#3C2D1E] hover:bg-[#E0CCBE] hover:text-[#3C2D1E] text-[#E0CCBE] py-2 px-16 border border-[#3C2D1E] rounded '>Shop with us</button>

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

export default FirstScreen
