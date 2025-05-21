import React from 'react';
import './ScheduleItem.css';

export interface ScheduleItemProps {
  type: 'visit' | 'task' | 'more';
  count: number;
}

function ScheduleItem({ type, count }: ScheduleItemProps) {
  return (
    <div className={`schedule-item ${type}`}>
      <div className="schedule-item-left">
        <div className="icon">
          <div className="icon-inner"></div>
        </div>
        <div className="label">{type === 'visit' ? 'Visits' : type === 'task' ? 'Tasks' : 'More'}</div>
      </div>
      <div className="schedule-item-right">
        <div className="count-badge">
          <div className="count">{count}</div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;
