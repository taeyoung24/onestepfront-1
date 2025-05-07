import CardBody from './CardBody';
import './App.css';


function App() {
  return (
    <>
      <div className="cards">
        <CardBody
          categoryName='self-study'
          projectName='One-step Front'
          addedDate='25. 4. 9'
          deadlineDate='25. 5. 30'
          progressPercentage={50}
          lastUpdated='25. 5. 1'
        />
        <CardBody
          categoryName='self-study'
          projectName='Unlock 10 Playlist'
          addedDate='25. 2. 27'
          deadlineDate='unknown'
          progressPercentage={87.2}
          lastUpdated='25. 5. 1'
        />
        <CardBody
          categoryName='25-diode'
          projectName='Aurora-α'
          addedDate='25. 1. 17'
          deadlineDate='unknown'
          progressPercentage={81.2}
          lastUpdated='25. 5. 1'
        />
        <CardBody
          categoryName='self-study'
          projectName='Unlock 10 Playlist'
          addedDate='25. 2. 27'
          deadlineDate='unknown'
          progressPercentage={87.2}
          lastUpdated='25. 5. 1'
        />
        <CardBody
          categoryName='self-study'
          projectName='One-step Front'
          addedDate='25. 4. 9'
          deadlineDate='25. 5. 30'
          progressPercentage={50}
          lastUpdated='25. 5. 1'
        />
        <CardBody
          categoryName='self-study'
          projectName='Unlock 10 Playlist'
          addedDate='25. 2. 27'
          deadlineDate='unknown'
          progressPercentage={87.2}
          lastUpdated='25. 5. 1'
        />
      </div>
    </>
  )
}

export default App
