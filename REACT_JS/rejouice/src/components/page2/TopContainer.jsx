import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const TopContainer = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".topText .leftText", {
      x: -100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".topText",
        start: "top 50%",
        end: "top 30%",
        scrub:true
      },
    },"both");

    gsap.from(".topText .rightText", {
      x: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".topText",
        start: "top 50%",
        end: "top 30%",
        scrub:true
      },
    },"both");

    gsap.from(".bottomLine", {
      width:"0%",
      scrollTrigger: {
        trigger: ".topText",
        start: "top 70%",
        end: "top 30%",
        scrub:true
      },
    },"both");
  })
  return (
    <div className=' pt-5 '>
      <div className='topText flex justify-between items-end text-[20px] mb-3  px-[2vw] overflow-hidden'>
        <h4 className='leftText'>Full-service creative agency.
          <br />
          Two engagement models.
        </h4>

        <h4 className='rightText'>Paris & San Diego</h4>
      </div>
      <div className="bottomLine bg-gray-400 h-0.5 rounded-full"></div>
    </div>
  )
}

export default TopContainer
