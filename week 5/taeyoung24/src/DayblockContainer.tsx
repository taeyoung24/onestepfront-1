import React from 'react';
import ScheduleItem from './ScheduleItem';
import './DayblockContainer.css';

export interface ScheduleItemProps {
  type: 'visit' | 'task' | 'more';
  count: number;
}

interface DayblockProps {
  day: number;
  isToday?: boolean;
  isHoliday?: boolean;
  isOtherMonth?: boolean;
  contents?: ScheduleItemProps[];
}

function DayblockContainer({
  day,
  isToday = false,
  isHoliday = false,
  isOtherMonth = false,
  contents = [],
}: DayblockProps) {
  return (
    <div className="dayblock-container">
      <div className="dayblock-header">
        <div className={`day-number ${isToday ? 'today' : ''} ${isHoliday ? 'holiday' : ''} ${isOtherMonth ? 'other-month' : ''}`}>
          {day}
        </div>
      </div>
      <div className="dayblock-body">
        {contents.map((item, index) => (
          <ScheduleItem key={index} type={item.type} count={item.count} />
        ))}
      </div>
    </div>
  );
}

export default DayblockContainer;
