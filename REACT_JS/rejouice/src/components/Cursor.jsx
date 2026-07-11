import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cursor = ({ page1Ref }) => {
    const cursorRef = useRef(null)

    useGSAP(() => {
        const page1 = document.querySelector("#page1")
        if (!page1) return
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                delay:0.05,
                duration: 0.5,
                ease: "back.out"
            })
        }

        page1.addEventListener("mousemove", moveCursor)
        page1.addEventListener("mouseenter",()=>{
            gsap.to(cursorRef.current,{
                scale:1,
                opacity:1,
                duration:0.3,
                ease:"power2.in"
            })
        })

        page1.addEventListener("mouseleave",()=>{
            gsap.to(cursorRef.current,{
                scale:0,
                opacity:0,
                duration:0.6,
                ease:"power2.out"
            })
        })
    }, { scope: "#page1" })

    return (
        <div
            ref={cursorRef}
            className='flex items-center justify-center h-[9.5vw] w-[9.5vw] md:h-[7.5vw] md:w-[7.5vw] bg-linear-to-br from-orange-600 to-orange-400 fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full z-9 pointer-events-none shadow shadow-amber-600  opacity-0'
        >
            <div className=' text-[1.9vw] md:text-[1.2vw] text-gray-800 font-normal'>Play Reel</div>
        </div>
    )
}

export default Cursor