import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const HeroText = () => {

  useGSAP(()=>{
    gsap.from(".paragraph",{
      y:200,
      duration:1,
      opacity:0,
      scrollTrigger:{
        trigger:".paragraph",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:1
      }
    })
  })
  return (
    <div className='text-[6vw] md:text-[4vw] lg:text-[4vw] font-semibold  mt-5 text-pretty tracking-tight px-[2vw] overflow-hidden'>
      <p className='paragraph indent-[10vw]'>We are a digital brand accelerator. We design and develop market-defining brands through award-winning deliverables. Choose full cash compensation or offset up to 50% of our for equity in your company. Your vision, your decision.</p>
    </div>
  )
}

export default HeroText
