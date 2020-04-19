import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import formattedEvents from '../../data/event-loader';

const localizer = momentLocalizer(moment);

console.log(formattedEvents);
const CalendarComponent = (props) => (
  <div className="calendar">
    <Calendar
      localizer={localizer}
      events={formattedEvents}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarComponent;
