import React from 'react'
const Navbar = () => {
  return (
    <div className='text-white h-full w-full flex flex-col items-center justify-between'>
      <nav className='w-full flex items-center justify-between px-[3vw] py-[2vw]'>
        <h3 className='lg:text-[1.3vw] font-light cursor-pointer'>The Venture Agency.</h3>
        <h4 className='bg-[#ffffff21] py-2 px-4 text-2xl cursor-pointer'>Menu</h4>
      </nav>
      <h1 className='text-[25vw] font-semibold cursor-default'>
        <span>r</span>
        <span>e</span>
        <span>j</span>
        <span>o</span>
        <span>u</span>
        <span>i</span>
        <span>c</span>
        <span>e</span>
      </h1>
    </div>
  )
}

export default Navbar
