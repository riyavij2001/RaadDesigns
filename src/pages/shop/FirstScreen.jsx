import React, { useEffect, useState } from 'react'
import './style.css'
import HomeDecor from './TabContents/HomeDecor'
import LivingRoom from './TabContents/LivingRoom'
import Footer from '../../Footer'

const FirstScreen = () => {
    const [tab, setTab] = useState(0)
    const toggleTab = (index) => {
        setTab(index);
    }
    useEffect(() => {
        console.log(tab)
    }, [tab])

    return (
        <div className=' bg-[#262425] '>
            <div class="w-full p-[10vh]">
                <div className=' text-[#E0CCBE] items-center justify-center text-center'>
                    <h1 className=' text-3xl'>Curated Collections for Your Perfect Home</h1>
                    <br />
                    <p className=' mb-8'>Discover Handpicked Selections Tailored to Elevate Your Living Space</p>
                </div>
                <div className=' pt-[10vh] grid grid-cols-12'>
                    <div class=" right-0 w-[14vw] col-span-2 sticky">
                        <table class="table-fixed w-full">
                            <tbody class="relative flex flex-col flex-wrap p-1 list-none rounded-lg" data-tabs="tabs" role="list">
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 0 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(0)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Home Decor</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 1 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(1)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Living Room</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 2 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(2)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Bed Room</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 3 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(3)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Kitchen</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 4 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(4)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Bathroom</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                                <tr className=' pb-[3vh]'>
                                    <td class="z-30 flex-auto text-center border-l ">
                                        <div className={tab === 5 ? "SelectedText" : "NormalText"} onClick={() => toggleTab(5)}>
                                            <a class="z-30 flex w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit" data-tab-target="" role="tab" aria-selected="true">
                                                <span class="m-2 text-[#E0CCBE]">Study Room</span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className={tab === 0 ? "" : "tabs"}>
                            <HomeDecor />
                        </div>
                        <div className={tab === 1 ? "" : "tabs"}>
                            <LivingRoom />
                        </div>
                        <div className={tab === 2 ? "" : "tabs"}>
                            <HomeDecor />
                        </div>
                        <div className={tab === 3 ? "" : "tabs"}>
                            <LivingRoom />
                        </div>
                        <div className={tab === 4 ? "" : "tabs"}>
                            <HomeDecor />
                        </div>
                        <div className={tab === 5 ? "" : "tabs"}>
                            <LivingRoom />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FirstScreen