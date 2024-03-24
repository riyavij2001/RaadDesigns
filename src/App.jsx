import Navbar from './Navbar'
import FirstScreen from './Firstscreen'
import Secondscreen from './Secondscreen'
import insta from './Images/insta.png'
import fb from './Images/fb.png'
import twitter from './Images/twitter.png'

function App() {
  return (
    <div>
      <div className='flex top-1/2'>
        <div className=' flex md:flex md:flex-grow flex-row justify-end sticky right-0 text-[#E0CCBE] top-64 h-16 w-16'>
          <div className=' bg-[#3C2D1E] h-36 w-10 flex md:flex md:flex-col justify-center text-[#E0CCBE]'>
            <a className=' p-2 h-10 w-10' href=""> <img src={insta} alt="" /> </a>
            <a className=' p-2 h-10 w-10' href=""> <img src={fb} alt="" /> </a>
            <a className=' p-2 h-10 w-10' href=""> <img src={twitter} alt="" /> </a>
          </div>
        </div>
      </div>
      <div className=' flex flex-col'>
        <Navbar />
        <FirstScreen />
        <Secondscreen />
      </div>
    </div>
  )
}

export default App
