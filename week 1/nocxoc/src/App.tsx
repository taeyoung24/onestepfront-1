import { useState } from 'react'
import logoFFL from './assets/logo_FFL_black.png';
import logoRLL from './assets/logo_RLL_black.png';
import logoSCL from './assets/logo_SCL_black.png';
import logoULO from './assets/logo_ULO_black.png';
import logoWDL from './assets/logo_WDL_black.png';
import logoWFL from './assets/logo_WFL_black.png';
import logoBCL from './assets/logo_BCL_black.png';
import logoEDL from './assets/logo_EDL_black.png';
import logoHLL from './assets/logo_HLL_black.png';
import logoICL from './assets/logo_ICL_black.png';
import logoNCL from './assets/logo_NCL_black.png';
import logoULF from './assets/logo_ULF_black.png';
import logoULH from './assets/logo_ULH_black.png';
import logoWLO from './assets/logo_WLO_black.png';
import logoULG from './assets/logo_ULG_black.png';
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='background'>
        <div className="card-containers">
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
          </div>
          <div className='card-container'>
            <div className='card'>
              <p>
                WFL
              </p>
              <img src={logoWFL} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                BCL
              </p>
              <img src={logoBCL} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                EDL
              </p>
              <img src={logoEDL} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                HLL
              </p>
              <img src={logoHLL} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                ICL
              </p>
              <img src={logoICL} alt="logo" className="logo"/>
            </div>
          </div>
          <div className='card-container'>
            <div className='card'>
              <p>
                NCL
              </p>
              <img src={logoNCL} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                ULF
              </p>
              <img src={logoULF} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                ULH
              </p>
              <img src={logoULH} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                WLO
              </p>
              <img src={logoWLO} alt="logo" className="logo"/>
            </div>
            <div className='card'>
              <p>
                ULG
              </p>
              <img src={logoULG} alt="logo" className="logo"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
