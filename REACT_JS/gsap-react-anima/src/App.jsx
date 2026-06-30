import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const App = () => {

  const boxRef = useRef()
  const circleRef = useRef()
  const [circle, setCircle] = useState(0)

  const random = gsap.utils.random(-200, 400, 2)

const {contextSafe} = useGSAP()

  const animate = contextSafe(()=>{
    gsap.from(boxRef.current, {
      rotate: "+=360",
      duration: 1,
      scale:0.80
    })
  },[circle])

  useGSAP(()=>{
     gsap.to(circleRef.current, {
      rotate: 360,
      duration: 1.1,
      repeat: -1,
      ease: "power2.inOut"
    })
  })

  return (
    <main className="h-screen w-full bg-gray-950 p-5 flex flex-col items-center justify-evenly overflow-hidden">
      <div className="first w-full flex h-fit justify-evenly p-4  ">
        <div className="container border border-white rounded-2xl p-5 w-fit">
          <div ref={boxRef} className="box bg-linear-to-br from-red-400 to-blue-900 h-35 w-35 rounded-xl mb-5"></div>
          <div ref={circleRef} className="circle h-35 w-35 border-5 border-gray-700 border-t-5 border-b-teal-300 rounded-full"></div>
        </div>
      </div>

      <button onClick={() => {
        animate()
        setCircle(random)
      }} className='bg-[#e2e2d8fc] w-fit h-fit py-2 px-4 text-xl rounded-full text-center font-bold tracking-wider shadow-[#ededb384] shadow-2xl hover:scale-99 hover:bg-[#8d8d78fc] cursor-pointer duration-100 active:scale-102'>Animate</button>
    </main>
  )
}

export default App
