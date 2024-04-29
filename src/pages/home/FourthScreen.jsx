import insta from '/static/images/insta.png'
import fb from '/static/images/fb.png'
import twitter from '/static/images/twitter.png'
import Point1 from '/static/images/Point1.jpeg'
import Collage1 from '/static/images/Collage1.png'
import Collage2 from '/static/images/Collage2.jpeg'
import Collage3 from '/static/images/Collage3.jpeg'
import Collage4 from '/static/images/Collage4.jpeg'
import { Link } from 'react-router-dom';
import React from "react";
import { LayoutGrid } from '../../components/ui/layout-grid'

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Hall Harmony</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            A blend of elegance and comfort, our Hall Harmony project sets the perfect ambiance for gatherings and quiet evenings alike.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Study Sanctuary</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Designed to inspire focus and creativity, our Study Sanctuary offers a tranquil environment for learning and working.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Washroom Retreat</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Indulge in luxury and relaxation with our Washroom Retreat, where every detail is curated to rejuvenate your senses.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold text-4xl text-white">Hall Haven</p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
            Experience comfort and style in our Hall Haven project, designed to be the heart of your home for cozy evenings and joyful gatherings.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: Collage1,
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            Collage2,
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            Collage4,
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            Collage3,
    },
];

function FourthScreen() {
    return (

        <div className=' bg-[#262425] bg-center bg-cover text-[#E0CCBE]'>
           
                {/* <div className=' items-center text-center w-[100vw] mt-[15vh]'>
                    <h1 className='  text-3xl'>How RaaD Designs Works</h1>
                    <br />
                    <p className=' mb-8'>A Peek into RaaD's Innovative Approach to Interior Design, Where Every Pixel Tells a Story.</p>
                </div> */}
                <div className='  w-[100%]'>
                    <div className=" h-screen w-full">
                        <LayoutGrid cards={cards} />

                    </div>
                </div>
        </div>
    )
}

export default FourthScreen
