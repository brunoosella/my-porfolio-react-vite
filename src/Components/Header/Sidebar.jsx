import './Sidebar.scss'
import profile from '../../assets/profile.png'
import concentrate from '../../assets/concentrate.png'
import thinking from '../../assets/thinking.png'

export default function Sidebar({ setHover }) {

  const profileContent = {
    img: profile,
    style:{ 
      bg:  '#ffd903'
    },
    code: 'profile',
    legend: {
      title: 'Who I am?',
      description: 'A semi senior front end developer, team leader, and enthusiastic nerdy guy...'
    }
  }

  const concentrateContent = {
    img: concentrate,
    style: {
      bg: '#1d0413'
    },
    code: 'concentrate',
    legend: {
      title: 'What I did?',
      description: 'A semi senior front end developer, team leader, and enthusiastic nerdy guy'
    }
  }

  const thinkingContent = {
    img: thinking,
    style: {
      bg: '#ff6803'
    },
    code: 'thinking',
    legend: {
      title: 'Any skills?',
      description: 'A semi senior front end developer, team leader, and enthusiastic nerdy guy'
    }
  }

  const experienceContent = {
    img: thinking,
    style: {
      bg: '#ff6803'
    },
    code: 'thinking',
    legend: {
      title: 'Experience?',
      description: 'A semi senior front end developer, team leader, and enthusiastic nerdy guy'
    }
  }

  const workWithMeContent = {
    img: thinking,
    style: {
      bg: '#ff6803'
    },
    code: 'thinking',
    legend: {
      title: 'How to work with me?',
      description: 'A semi senior front end developer, team leader, and enthusiastic nerdy guy'
    }
  }
  
  return (
    <div id='sidebar'>
      <div
        className="nav-box"
        onMouseEnter={() => setHover(profileContent)}
      >
        <a href="">Who I am ? </a>
      </div>
    
      <div
        className="nav-box"
        onMouseEnter={() => setHover(concentrateContent)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">What I did ?</a>
      </div>
            <div
        className="nav-box"
        onMouseEnter={() => setHover(thinkingContent)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">Any skills ?</a>
      </div>
      <div
        className="nav-box"
        onMouseEnter={() => setHover(experienceContent)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">Experience ?</a>
      </div>
            <div
        className="nav-box"
        onMouseEnter={() => setHover(workWithMeContent)}
        // onMouseLeave={() => setHover(null)}
      >
        <a href="">How to work with me ?</a>
      </div>
    </div>
  )
}
