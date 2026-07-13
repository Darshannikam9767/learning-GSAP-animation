import React from 'react'
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'
import Page5 from './components/page5/Page5'
import Loader from './components/Loader'

const App = () => {
  return (
    <div>
      <Loader/>
      <main>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
    </main>
    </div>
  )
}

export default App
