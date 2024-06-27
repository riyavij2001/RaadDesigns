import insta from "/static/images/insta.png";
import fb from "/static/images/fb.png";
import twitter from "/static/images/twitter.png";
import lipstick_bg from "/static/images/lipstick_bg.jpg";

function FirstScreen() {
  return (
    <div className=" bg-bg bg-center bg-no-repeat h-[80vh] md:h-screen bg-cover">
      <div className=" flex">
        <div className=" bg-black bg-opacity-70 m-[35px] mt-44 pt-12 p-10 md:m-36 md:p-14 text-[#E0CCBE] md:h-64 md:w-1/3 items-center flex flex-col justify-center text-center">
          <h1 className=" md:mb-3 md:text-3xl">Let your home be unique</h1>
          <p className=" mb-8">
            A room should never allow the eye to settle in one place. It should
            smile at you and create fantasy.
          </p>
          <a
            href="/shop"
            className="bg-[#3C2D1E] hover:bg-[#E0CCBE] hover:text-[#3C2D1E] text-[#E0CCBE] py-2 px-14 border border-[#3C2D1E] rounded inline-block text-center w-56"
          >
            Shop with us
          </a>
        </div>
        <div className=" md:flex md:flex-grow flex-row justify-end sticky right-0 text-[#E0CCBE] top-64 h-16 w-16 hidden">
          <div className=" bg-[#3C2D1E] h-36 w-10 flex md:flex md:flex-col justify-center text-[#E0CCBE]">
            <a className=" p-2 h-10 w-10" href="">
              {" "}
              <img src={insta} alt="" />{" "}
            </a>
            <a className=" p-2 h-10 w-10" href="">
              {" "}
              <img src={fb} alt="" />{" "}
            </a>
            <a className=" p-2 h-10 w-10" href="">
              {" "}
              <img src={twitter} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
