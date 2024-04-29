import React, { useEffect, useState } from 'react'

const FirstScreen = () => {
    const [tab, setTab] = useState(0)
    useEffect(() => {
        console.log(tab)
    }, [tab])

    const HomeDecor = [
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        },
        {
            title: "ABC",
            imageSrc: "/static/images/Pic1.jpg"
        }
    ]

    return (
        <div className=' bg-[#262425] '>
            <div class="w-full p-[10vh]">
                <div className=' text-[#E0CCBE] items-center justify-center text-center'>
                    <h1 className=' text-3xl'>Curated Collections for Your Perfect Home</h1>
                    <br />
                    <p className=' mb-8'>Discover Handpicked Selections Tailored to Elevate Your Living Space</p>
                </div>
                <div className=' pt-[10vh] grid grid-cols-12'>
                    <div class=" right-0 w-[14vw] col-span-2">
                        <table class="table-fixed w-full">
                            <tbody class="relative flex flex-col flex-wrap p-1 list-none rounded-lg" data-tabs="tabs" role="list">
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l " onClick={() => setTab(0)}>
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                            <span class="m-2 text-[#E0CCBE]">Home Decor</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l" onClick={() => setTab(1)}>
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="false">
                                            <span class="m-2 text-[#E0CCBE]">Living Room</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l" onClick={() => setTab(2)}>
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="false">
                                            <span class="m-2 text-[#E0CCBE]">Bed Room</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l">
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                            <span class="m-2 text-[#E0CCBE]">Kitchen</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l">
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                            <span class="m-2 text-[#E0CCBE]">BathRoom</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l">
                                        <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                            <span class="m-2 text-[#E0CCBE]">Study Room</span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=' w-[160vh] grid grid-cols-3 gap-9 '>
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
            </div>
        </div>
    )
}

export default FirstScreen