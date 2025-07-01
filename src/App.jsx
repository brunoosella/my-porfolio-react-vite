import { useEffect, useState } from 'react'
import Sidebar from './Components/Header/Sidebar'
import './App.scss'
import banner from './assets/banner.png'

function App() {

  const [hover, setHover] = useState({
    img: banner,
    legend: { title: '', description: '' }
  })
  const [open, setOpen]         = useState(false)
  const [showDesc, setShowDesc] = useState(false)

useEffect(() => {

  document.querySelector('#main h1')?.classList.remove('animate');
  setTimeout(() => {
    document.querySelector('#main h1')?.classList.add('animate');
  }, 100);

}, [hover]);


  return (
    <div id="main" style={{backgroundColor: hover?.style?.bg}}>
      <img id="background" src={banner} alt="" />
      <Sidebar setHover={setHover} />

      <h1 key={hover}>{hover.legend.title}</h1>
      <div id="main-content">

        <div
          id="banner-container"
          onMouseEnter={() => setShowDesc(true)}
          onMouseLeave={() => setShowDesc(false)}
        >
          <img key={hover.img} src={hover.img} className="hover-img" alt="hover" />
          {showDesc && (
            <div className="hover-description">
              <div className="text">
                <h1>{hover.legend.title}</h1>
                <p>{hover.legend.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="btn-container">
        <button id='dropdown-btn' onClick={() => setOpen(!open)}>Download CV</button>
        {
          open &&
          <div className="dropdown">
            <button>
              Download PDF
            </button>
            <button>
              Linkedin
            </button>
          </div>
          
        }
      </div> */}
    </div>
  )
}

export default App
