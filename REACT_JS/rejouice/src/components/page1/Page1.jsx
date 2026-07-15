import React from 'react'
import Page1Content from './Page1Content'
import Cursor from '../Cursor'


const Page1 = ({tl}) => {
  // const page1Ref = useRef()
  return (
    <div id='page1' className='h-screen w-full relative'>
      <Cursor />
      {/* <video className=' h-full w-full object-cover absolute' src="https://www.rejouice.com/static/reel-short.mp4" muted loop></video> */}
      <video className=' h-full w-full object-cover absolute' src="../src/assets/reel-short.mp4"  muted loop></video>
      <Page1Content tl={tl} />
    </div>
  )
}

export default Page1
