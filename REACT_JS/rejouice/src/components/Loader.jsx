import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Loader = () => {

    useGSAP(()=>{
        const tl = gsap.timeline()

        tl.from("#container h3",{
            x:40,
            duration:0.9,
            delay:2,
            stagger:0.3,
            opacity:0,
        })

        tl.to("#container h3",{
            opacity:0,
            delay:0.9,
            duration:0.9,
            x:-40,
            stagger:0.3,
            
        })

        tl.to("#container",{
            duration:1,
            delay:1,
            zIndex:0,
            // opacity:0,
            y:"-100%"
        })
    })
  return (
    <div id='container' className='bg-black text-white h-screen w-full absolute z-99 flex items-center justify-center text-[6vw] md:text-[4vw] lg:text-[2.5vw] font-medium gap-2.5 '>
      <h3>Tommarow's</h3>
      <h3>Brand,</h3>
      <h3>Today."</h3>
    </div>
  )
}

export default Loader
