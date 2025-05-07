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
  return (
    <div className='todo-container' style={{ backgroundColor: backgroundColor }}>
      <div className='graphic-container'>
        <div className='vertical-line' style={{ backgroundColor: lineColor }}></div>
        <div className='circle' style={{ backgroundColor: circleColor }}></div>
        <img src={logo} className='image' alt='Task Logo' />
      </div>
      <div className='letter-container'>
        <div className='title'>
          <p>{title}</p>
        </div>
        <div className='contents'>
          <p>{content}</p>
        </div>
        <div className='time' style={{ color: timeColor }}>
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
            circleColor='#98D6BE'
            lineColor='#98D6BE'
            timeColor='#98D6BE'
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
            circleColor='#98D6BE'
            lineColor='#98D6BE'
            timeColor='#98D6BE'
          />
          <TodoItem
            logo={checkLogo}
            title='Kendo Club'
            content='Ochi Kendo Hall'
            time='13:00 - 17:00'
            circleColor='#F48389'
            lineColor='#F48389'
            timeColor='#F48389'
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
