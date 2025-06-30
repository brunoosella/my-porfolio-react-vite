import { useEffect, useState } from 'react'
import Sidebar from './Components/Header/Sidebar'
import './App.scss'
import banner from './assets/banner.png'

function App() {

  const [hover, setHover] = useState(banner)
  const [description, setDecription] = useState(false)

  useEffect(() => {
    setHover(banner)
  },[])

  return (
    <div id="main">
      <img id="background" src={banner} alt="" />
      <Sidebar setHover={setHover} />
      
      <div 
        id="banner-container"
        onMouseEnter={() => setDecription(true)}
        onMouseLeave={() => setDecription(false)}
      >
        {hover && (
          <img
            key={hover}
            src={hover}
            className="hover-img"
            alt="hover"
          />
        )}
        {
          description && 
          <div className="hover-description">
            <div className="text">
              <h1>I am...</h1>
              <p>
                Semi Senior Front End Developer
                <br />
                Team Leader 
                <br />
                & an enthusiastic nerdy guy </p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App
