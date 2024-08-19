import { useState } from 'react'
import Navbar from './Navbar'
import NewsContainer from './NewsContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
   <NewsContainer/>
    </>
  )
}

export default App
