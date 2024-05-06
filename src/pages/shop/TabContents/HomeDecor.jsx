import React, { Component } from 'react'

const HomeDecor = () => {
    const HomeDecor = [
        {
            title: "Elysian Glow",
            imageSrc: "/static/images/HomeDecorItem1.jpeg"
        },
        {
            title: "Tri Lumina",
            imageSrc: "/static/images/HomeDecorItem2.jpeg"
        },
        {
            title: "Orbit Ease",
            imageSrc: "/static/images/HomeDecorItem3.jpeg"
        },
        {
            title: "Aurora Aura",
            imageSrc: "/static/images/HomeDecorItem4.jpeg"
        },
        {
            title: "Golden Mystery",
            imageSrc: "/static/images/HomeDecorItem5.jpeg"
        },
        {
            title: "Timeless Trove",
            imageSrc: "/static/images/HomeDecorItem6.jpeg"
        },
        {
            title: "Gleaming Gaze",
            imageSrc: "/static/images/HomeDecorItem7.jpeg"
        },
        {
            title: "Celestial Canvas",
            imageSrc: "/static/images/HomeDecorItem8.jpeg"
        },
        {
            title: "Earthy Elegance",
            imageSrc: "/static/images/HomeDecorItem9.jpeg"
        },
        {
            title: "Elegantease",
            imageSrc: "/static/images/HomeDecorItem10.jpeg"
        },
        {
            title: "Central Chic",
            imageSrc: "/static/images/HomeDecorItem11.jpeg"
        },
        {
            title: "Botanical Bloom",
            imageSrc: "/static/images/HomeDecorItem12.jpeg"
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

export default HomeDecor