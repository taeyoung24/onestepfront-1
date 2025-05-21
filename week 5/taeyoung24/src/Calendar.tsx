import React from 'react';
import DayblockContainer from './DayblockContainer';
import './Calendar.css';

// 다른 달 날짜 포함한 날짜 데이터 예시
const calendarData = {
  prevMonth: [28, 29, 30],
  currentMonth: Array.from({ length: 31 }, (_, i) => i + 1),
  nextMonth: [1]
};

function Calendar() {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-container">
        <div className="calendar-header">
          <div className="day-name">MON</div>
          <div className="day-name">TUE</div>
          <div className="day-name">WED</div>
          <div className="day-name">THU</div>
          <div className="day-name">FRI</div>
          <div className="day-name">SAT</div>
          <div className="day-name">SUN</div>
        </div>
        
        <div className="calendar-grid">
          {/* 이전 달 날짜 */}
          {calendarData.prevMonth.map(day => (
            <DayblockContainer 
              key={`prev-${day}`}
              day={day}
              isOtherMonth={true}
            />
          ))}
          
          {/* 현재 달 날짜 */}
          {calendarData.currentMonth.map(day => (
            <DayblockContainer 
              key={`current-${day}`}
              day={day}
              isToday={day === 12}
              contents={day === 12 ? [
                { type: 'visit', count: 1 },
                { type: 'more', count: 4 },
                { type: 'more', count: 4 }
              ] : []}
            />
          ))}
          
          {/* 다음 달 날짜 */}
          {calendarData.nextMonth.map(day => (
            <DayblockContainer 
              key={`next-${day}`}
              day={day}
              isOtherMonth={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
