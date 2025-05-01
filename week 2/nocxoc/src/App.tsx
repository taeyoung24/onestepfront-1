import { useState } from 'react'
import japanLogo from './assets/japan.png'
import studyLogo from './assets/study.png'
import kendoLogo from './assets/kendo.png'
import Card from './Card'
import './App.css'


function App() {

  return (
    <>
      <div className='background'>
        <div className='card-container'> 
          <Card
            imageName={studyLogo}
            category='university'
            title='Complete Assignments'
            progress={35}
          />
          <Card
            imageName={japanLogo}
            category='Language'
            title='Learning Japanese'
            progress={65}
          />
          <Card
            imageName={kendoLogo}
            category='Sports'
            title='Practice Kendo'
            progress={50}
          />
        </div>
      </div> 
    </>
  )
}

export default App
