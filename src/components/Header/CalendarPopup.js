import React, { useState } from 'react';

const CalendarPopup = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 15)); // Set to Jan 15, 2025 as in the image
  const [activeTab, setActiveTab] = useState('Dates');

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const renderCalendar = (monthOffset) => {
    const displayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + monthOffset);
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && 
        selectedDate.getDate() === day && 
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

      days.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-day ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="calendar-month">
        <div className="calendar-weekdays">
          {daysOfWeek.map(day => <div key={day}>{day}</div>)}
        </div>
        <div className="calendar-days">
          {days}
        </div>
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <div className="calendar-popup">
      <div className="calendar-tabs">
        {['Dates', 'Months', 'Flexible'].map(tab => (
          <button 
            key={tab} 
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="calendar-navigation">
        <button onClick={handlePrevMonth} className="nav-button left-arrow" aria-label="Previous month"></button>
        <div className="month-name">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
        <div className="month-name">{monthNames[(currentDate.getMonth() + 1) % 12]} {currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear()}</div>
        <button onClick={handleNextMonth} className="nav-button right-arrow" aria-label="Next month"></button>
      </div>
      <div className="calendar-content">
        {renderCalendar(0)}
        {renderCalendar(1)}
      </div>
      <div className="calendar-flexibility">
        <button className="flexibility-option active">Exact dates</button>
        <button className="flexibility-option">± 1 day</button>
        <button className="flexibility-option">± 2 days</button>
        <button className="flexibility-option">± 3 days</button>
        <button className="flexibility-option">± 7 days</button>
        <button className="flexibility-option">± 14 days</button>
      </div>
    </div>
  );
};

export default CalendarPopup;