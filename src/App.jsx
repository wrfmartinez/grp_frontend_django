<<<<<<< HEAD
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
=======
import "./App.css";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <main>
        {/* <Products /> */}
        <Product />
      </main>
    </>
  );
}

export default App;
>>>>>>> 4176ab0c1ebc96c847e405f0626ae7f743221186
