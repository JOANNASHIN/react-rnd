import React from 'react';

interface CalendarBoxProps {
  date: number;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({date}) => {
  return(
    <div>
      <span>{date}</span>
      <div>
        내용
      </div>
    </div>
  )
}

export default CalendarBox;