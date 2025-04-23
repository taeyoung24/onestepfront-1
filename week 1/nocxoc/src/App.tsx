import { useState } from 'react'
import logoFFL from './assets/logo_FFL_black.png';
import logoRLL from './assets/logo_RLL_black.png';
import logoSCL from './assets/logo_SCL_black.png';
import logoULO from './assets/logo_ULO_black.png';
import logoWDL from './assets/logo_WDL_black.png';
import logoWFL from './assets/logo_WFL_black.png';
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='background'>
        <div className='card-container'>
          <div className='card'>
            <p>
              FFL
            </p>
            <img src={logoFFL} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              RLL
            </p>
            <img src={logoRLL} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              SCL
            </p>
            <img src={logoSCL} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              ULO
            </p>
            <img src={logoULO} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              WDL
            </p>
            <img src={logoWDL} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              WFL
            </p>
            <img src={logoWFL} alt="logo" className="logo"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
