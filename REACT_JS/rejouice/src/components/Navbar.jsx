import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Navbar = ({tl}) => {

  useGSAP(() => {

    tl.from("nav h3, nav h4",{
      y:50,
      opacity:0,
      duration:0.7,
    })

    tl.from(".logoname span",{
      y:500,
      duration:1,
      stagger:0.1,
      opacity:0,
      ease:"power4.inOut"
    })
  },)
  return (
    <div className='text-white h-full w-full flex flex-col items-center justify-between'>
      <nav className='w-full flex items-center justify-between px-[3vw] py-[2vw]'>
        <h3 className='lg:text-[1.3vw] font-light cursor-pointer'>The Venture Agency.</h3>
        <h4 className='bg-[#ffffff21] py-2 px-4 text-2xl cursor-pointer backdrop-blur-xs rounded-md'> Menu</h4>
      </nav>
      <h1 className='logoname text-[25vw] font-semibold cursor-default overflow-y-hidden'>
        <span className=' inline-block'>r</span>
        <span className=' inline-block'>e</span>
        <span className=' inline-block'>j</span>
        <span className=' inline-block'>o</span>
        <span className=' inline-block'>u</span>
        <span className=' inline-block'>i</span>
        <span className=' inline-block'>c</span>
        <span className=' inline-block'>e</span>
      </h1>
    </div>
  )
}

export default Navbar
