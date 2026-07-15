import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
const TopText = () => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline()
  useGSAP(()=>{
    tl.from(".page3TopText h4, .page3TopText div",{
      y:200,
      opacity:0,
      stagger:0.7,
      scrollTrigger:{
        trigger:".page3TopText h4",
        scroller:"body",
        start:"top 80%",
        end:"top 50%",
        scrub:2
      }
    })
  })
  return (
    <div className='page3TopText text-center'>
      <h4 className=' tracking-wider mb-[1vw] font-medium '>Agent & Venture <span className='bg-black rounded-full px-3 py-0.5 text-white text-[14px]'>Models</span></h4>
      <div className=" text-[7vh] font-normal">
        <h2>Explore Our Services</h2>
      <h2>& engagement models</h2>
      </div>
    </div>
  )
}

export default TopText
