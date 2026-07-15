import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Page5Top = () => {

  useGSAP(()=>{
    gsap.from(".getInTouch",{
      x:800,
      opacity:0,
      scrollTrigger:{
        trigger:".getInTouch",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:2
      }
    })

     gsap.from(".bottomBorder",{
      width:"0%",
      opacity:0,
      scrollTrigger:{
        trigger:".getInTouch",
        scroller:"body",
        start:"top 70%",
        end:"top 60%",
        scrub:2
      }
    })
  })
  return (
    <div className=' w-[98%] ml-[1%] overflow-hidden'>
      <h1 className='getInTouch text-[8vw]'>Get in touch.</h1>
      <div className='bottomBorder h-0.5 w-full bg-gray-400 mt-2 rounded-full'></div>
    </div>
  )
}

export default Page5Top
