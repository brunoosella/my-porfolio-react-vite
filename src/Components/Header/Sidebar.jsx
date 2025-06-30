import './Sidebar.scss'
import profile from '../../assets/profile.png'
import concentrate from '../../assets/concentrate.png'
import thinking from '../../assets/thinking.png'

export default function Sidebar({ setHover }) {
  return (
    <div id='sidebar'>
      <div
        className="nav-box"
        onMouseEnter={() => setHover(profile)}
      >
        <a href="">Who I am ? </a>
      </div>
    
      <div
        className="nav-box"
        onMouseEnter={() => setHover(concentrate)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">What I did ?</a>
      </div>
            <div
        className="nav-box"
        onMouseEnter={() => setHover(thinking)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">Any skills ?</a>
      </div>
            <div
        className="nav-box"
        // onMouseEnter={() => setHover(other)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">Experience ?</a>
      </div>
    </div>
  )
}
