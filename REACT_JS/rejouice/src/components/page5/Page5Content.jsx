import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Page5Content = () => {

    useGSAP(()=>{
        gsap.from(".anima",{
            y:200,
            opacity:0,
            scale:0,
            scrollTrigger:{
                trigger:".mainDiv",
                scroller:"body",
                start:"top 60%",
                end:"top 40%",

            }
        })
    })
    return (
        <div className='mainDiv min-h-full w-[96%] ml-[2%] mt-[10vh] md:mt-[7vh] lg:mt-[5vh]'>
            <form className='anima flex flex-col items-start gap-[2vh] md:ml-[10%] md:w-[80%] lg:w-[80%] bg-linear-to-b from-[#6d6d6d30] to-white py-[1vw] px-[2vw] rounded-3xl shadow-2xl shadow-[#6d6d6d]'>
                <label className='anima' htmlFor="name">Name (required)</label>
                <div className=" w-full flex justify-between">
                    <input className='anima  border-gray-400 border-t-0 border-l-0 border-r-0 border-b-2  outline-0  py-2 w-[45%] focus:border-gray-500' type="text" placeholder='First Name' />
                    <input className='anima  border-gray-400 border-t-0 border-l-0 border-r-0 border-b-2  outline-0  py-2 w-[45%] focus:border-gray-500' type="text" placeholder='Last Name' />
                </div>
                <label className='anima' htmlFor="email">Email (required)</label>
                <input className='anima  border-gray-400 border-t-0 border-l-0 border-r-0 border-b-2  outline-0  py-2 w-full focus:border-gray-500' type="email" placeholder='Email address' />
                <textarea className='anima border-gray-400 rounded-xl border-2  outline-0 px-3 py-2 w-full mt-[4vh] min-h-[20vh] max-h-[20vh] resize-none focus:border-gray-500' placeholder='Drop your message'></textarea>
                <button className='anima bg-black px-4 py-2 rounded-full text-white tracking-wide shadow-2xl shadow-[#000000] w-full lg:w-[20%] lg:ml-[40%] hover:bg-[#000000d6] hover:cursor-pointer duration-150 hover:w-[96%] hover:ml-[2%]'>Submit</button>
            </form>
        </div>
    )
}

export default Page5Content
