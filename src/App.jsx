import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useState,useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [pageDisplay, setPageDisplay] = useState('home')

  return (
    <>
  
  {pageDisplay === 'home' && 
    <>
      <Navbar setPageDisplay={setPageDisplay}/>
   </>
  }  
  {pageDisplay === 'wood' &&
    <>
      <Navbar setPageDisplay={setPageDisplay}/>
      
    </>
  }
  {pageDisplay === 'lighting' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
  </>
  }
  {pageDisplay === 'appliances' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
  </>
  }
  {pageDisplay === 'landscaping' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
  </>
  }
  {pageDisplay === 'paint' &&
  <>
  <Navbar setPageDisplay={setPageDisplay}/>
  </>
  }
</>
  )
}
export default App
