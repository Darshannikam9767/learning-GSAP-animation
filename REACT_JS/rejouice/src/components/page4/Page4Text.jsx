import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Page4Text = () => {

  useGSAP(()=>{
    gsap.from(".container p",{
      y:300,
      opacity:0,
      scrollTrigger:{
        trigger:".container p",
        scroller:"body",
        start:"top 80%",
        end:"top 60%",
        scrub:1
      }
    })
  })

  return (
    <div className='container overflow-hidden text-[6vw] md:text-[4vw] lg:text-[4vw] font-semibold  mt-5 text-pretty tracking-tight px-[2vw]'>
      <p className=' indent-[10vw]'>We partner with 5 clients each year. This allows for intense focus on the transformation and launch of your brand by our very best team, which is the only team we have.</p>
    </div>
  )
}

export default Page4Text
