import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsX'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Carousel from './components/Content/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar/>
    <Header/>
    <Content/>

    

    </div>
  )
}

export default App
