import { useState } from 'react';
import checkLogo from './assets/check.png';
import './App.css';

function TodoItem({
  logo,
  title,
  content,
  time,
  backgroundColor = '#ffffff',
  lineColor = '#859fd6',
  circleColor = '#859fd6',
  timeColor = '#859fd6',
}: {
  logo: string;
  title: string;
  content: string;
  time: string;
  backgroundColor?: string;
  lineColor?: string;
  circleColor?: string;
  timeColor?: string;
}) {
  const [isClicked, setIsClicked] = useState(false); // 클릭 상태 관리

  const handleCircleClick = () => {
    setIsClicked(!isClicked); // 클릭 상태 토글
  };

  return (
    <div
      className='todo-container'
      style={{
        backgroundColor: isClicked ? '#d3f9d8' : backgroundColor, // 클릭 여부에 따라 배경색 변경
      }}
    >
      <div className='graphic-container'>
        <div
          className='vertical-line'
          style={{ backgroundColor: isClicked ? '#6fcf97' : lineColor }}
        ></div>
        <div
          className='circle'
          style={{ backgroundColor: isClicked ? '#6fcf97' : circleColor }}
          onClick={handleCircleClick} // 클릭 이벤트 추가
        ></div>
        <img
          src={logo}
          className='image'
          alt='Task Logo'
          onClick={handleCircleClick} // 클릭 이벤트 추가
        />
      </div>
      <div className='letter-container'>
        <div className='title'>
          <p>{title}</p>
        </div>
        <div className='contents'>
          <p>{content}</p>
        </div>
        <div className='time' style={{ color: isClicked ? '#6fcf97' : timeColor }}>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='category'>
            <div className='dot'></div>
            <p>WORK</p>
          </div>
          <TodoItem
            logo={checkLogo}
            title='One-step Front Project'
            content='Discord'
            time='13:00 - 15:00'
          />
          <TodoItem
            logo={checkLogo}
            title='Part-time Job'
            content='Mega Coffee'
            time='17:00 - 22:10'
          />
        </div>
        <div className='sub-container'>
          <div className='category'>
            <div className='dot'></div>
            <p>ACTIVITIES</p>
          </div>
          <TodoItem
            logo={checkLogo}
            title='Kendo'
            content='Ochi Kendo Hall'
            time='20:30 - 21:30'
          />
          <TodoItem
            logo={checkLogo}
            title='Kendo Club'
            content='Ochi Kendo Hall'
            time='13:00 - 17:00'
          />
          <TodoItem
            logo={checkLogo}
            title='Raft'
            content='Discord'
            time='13:00 - 15:00'
          />
        </div>
        <div className='sub-container'>
          <div className='category'>
            <div className='dot'></div>
            <p>OTHER</p>
          </div>
          <TodoItem
            logo={checkLogo}
            title='Go To Hospital'
            content='Peace & Harmony Clinic'
            time='16:30 - 17:30'
          />
        </div>
      </div>
    </>
  );
}

export default App;
