import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react' 
import {ScrollTrigger} from 'gsap/ScrollTrigger'
const Page4Top = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.from(".page4Text",{
            x:800,
            opacity:0,
            scrollTrigger:{
                trigger:".page4Text",
                scroller:"body",
                start:"top 60%",
                end:"top 40%",
                scrub:2
            }
        })

        gsap.from("#border",{
            width:"0%",
            scrollTrigger:{
                trigger:".page4Text",
                scroller:"body",
                start:"top 60%",
                end:"top 40%",
                scrub:2
            }
        })
    })
    return (
        <div className=' overflow-hidden'>
            <div className="pt-[10vw]">
                <h4 className='page4Text text-[20px] mb-3  px-[2vw]'>We operate on a simple philosophy:
                    <br />
                    Quality over quantity.
                </h4>
                <div id='border' className=" bg-gray-400 h-0.5 rounded-full mt-2"></div>
            </div>
        </div>
    )
}

export default Page4Top
