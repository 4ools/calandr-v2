import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import useEventData from '../EventsData';

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ selectEvent }) => {
  const events = useEventData();
  return (
    <div className='calendar'>
      <Calendar
        views={{
          month: true,
          agenda: true,
        }}
        onSelectEvent={selectEvent}
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarComponent;
