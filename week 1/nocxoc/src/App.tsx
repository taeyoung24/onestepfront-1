import { useState } from 'react'
import joystickLogo from './assets/joystick.png'
import artLogo from './assets/art.png'
import musicLogo from './assets/headphones.png'
import watchaLogo from './assets/watcha.png'
import studyLogo from './assets/study.png'
import kendoLogo from './assets/kendo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='background'>
        <div className='card-container'>
          <div className='card'>
            <p>
              game
            </p>
            <img src={joystickLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              artwork
            </p>
            <img src={artLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              music
            </p>
            <img src={musicLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              watcha
            </p>
            <img src={watchaLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              study
            </p>
            <img src={studyLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              kendo
            </p>
            <img src={kendoLogo} alt="logo" className="logo"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
