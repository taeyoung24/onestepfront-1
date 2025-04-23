import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='background'>
        <div className='card-container'>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
          <div className='card'>
            <p>
              telegram
            </p>
            <img src={reactLogo} alt="logo" className="logo"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
