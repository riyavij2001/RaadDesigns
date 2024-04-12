import insta from '../public/static/images/insta.png'
import fb from '../public/static/images/fb.png'
import twitter from '../public/static/images/twitter.png'

function StickyBar(){
    return(

<div className='flex top-1/2'>
        <div className=' flex md:flex md:flex-grow flex-row justify-end sticky right-0 text-[#E0CCBE] top-64 h-16 w-16'>
          <div className=' bg-[#3C2D1E] h-36 w-10 flex md:flex md:flex-col items-center justify-center'>
            <a className=' p-2 h-10 w-10' href=""> <img src={insta} alt="" /> </a>
            <a className=' p-2 h-10 w-10' href=""> <img src={fb} alt="" /> </a>
            <a className=' p-2 h-10 w-10' href=""> <img src={twitter} alt="" /> </a>
          </div>
        </div>
      </div>
    )

}

export default StickyBar