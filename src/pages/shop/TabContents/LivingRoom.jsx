import React, { Component } from 'react'

const LivingRoom = () => {
    const HomeDecor = [
        {
            title: "Urban Comfort",
            imageSrc: "/static/images/LivingRoomItem1.jpeg"
        },
        {
            title: "Cloud Comfort",
            imageSrc: "/static/images/LivingRoomItem2.jpeg"
        },
        {
            title: "Terra Trove",
            imageSrc: "/static/images/LivingRoomItem3.jpeg"
        },
        {
            title: "Garden Gaze",
            imageSrc: "/static/images/LivingRoomItem4.jpeg"
        },
        {
            title: "Zenith Zone",
            imageSrc: "/static/images/LivingRoomItem5.jpeg"
        },
        {
            title: "Illuminate Ease",
            imageSrc: "/static/images/LivingRoomItem6.jpeg"
        },
        {
            title: "Social Sip",
            imageSrc: "/static/images/LivingRoomItem7.jpeg"
        },
        {
            title: "Step Ease",
            imageSrc: "/static/images/LivingRoomItem8.jpeg"
        },
        {
            title: "Urban Elegance",
            imageSrc: "/static/images/LivingRoomItem9.jpeg"
        },
        {
            title: "Luxe Lounge",
            imageSrc: "/static/images/LivingRoomItem10.jpeg"
        },
        {
            title: "Minimalist Flare",
            imageSrc: "/static/images/LivingRoomItem11.jpeg"
        },
        {
            title: "Cozy Corner",
            imageSrc: "/static/images/LivingRoomItem12.jpeg"
        },

    ]
    return (
        <div>
            <div className=' w-[140vh] grid grid-cols-3 gap-8 '>
                {HomeDecor.map((items) => {
                    return <div className=" card w-80 h-[20em] bg-base-100 shadow-xl">
                        <figure><img src={items.imageSrc} alt="Shoes" className=' rounded-b-xl' /></figure>
                        <div className="card-body h-10 pt-7 items-center justify-center flex flex-row bg-[#191818] rounded-b-xl text-[#E0CCBE]">
                            <p className="card-title text-sm">{items.title}</p>
                            <div className="card-actions justify-end text-sm">
                                $200.00
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default LivingRoom