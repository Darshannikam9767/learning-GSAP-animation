import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Page3Elements = () => {

  gsap.registerPlugin(ScrollTrigger)
   useGSAP(()=>{
    gsap.from(".elements .elementContent",{
      x:500,
      opacity:0,
      scale:0,
      duration:1,
      stagger:0.7,
      scrollTrigger:{
        trigger:".elementContent",
        scroller:"body",
        start:"top 90%",
        end:"top 60%",
        scrub:1
      }
    })
   })
  return (
    <div className='elements min-h-[75vh] flex flex-wrap justify-center lg:justify-between p-[1vw] gap-2 md:gap-0 lg:gap-0 mt-[14vw] overflow-hidden'>
      <div  className='elementContent h-[75vh] w-[90%]  md:w-[32%] lg:mt-0 md:mt-0 relative'>
        <img className='  absolute h-full w-full object-cover object-center hover:opacity-0 duration-400' src="https://images.prismic.io/rejouice-2024/Z1r5Y5bqstJ98aaF_rivian.jpg?auto=format,compress&w=2418&h=1390&fm=avif" alt="" />
        <video className=' h-full w-full object-cover object-center' src="../src/assets/video-1.mp4" autoPlay muted loop></video>
      </div>
      <div  className='elementContent h-[75vh] w-[90%]  md:w-[32%] lg:mt-0 md:mt-0 relative'>
        <img className='  absolute h-full w-full object-cover object-center hover:opacity-0 duration-400' src="https://images.prismic.io/rejouice-2024/Z2AYnZbqstJ98i2G_oura-abdul-ovaice-photography-cd-21.png?auto=format,compress&w=2418&h=3140&fm=avif" alt="" />
        <video className=' h-full w-full object-cover object-center' src="../src/assets/video-2.mp4" autoPlay muted loop></video>
      </div>
      <div  className='elementContent h-[75vh] w-[90%]  md:w-[32%] lg:mt-0 md:mt-0 relative'>
        <img className='  absolute h-full w-full object-cover object-center hover:opacity-0 duration-400' src="https://images.prismic.io/rejouice-2024/Z2AYnJbqstJ98i2E_moxionpower.2023.04.onlocation-17821.png?auto=format,compress&w=2418&h=3149&fm=avif" alt="" />
        <video className=' h-full w-full object-cover object-center' src="../src/assets/video-3.mp4" autoPlay muted loop></video>
      </div>
    </div>
  )
}

export default Page3Elements
