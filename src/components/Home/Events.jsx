import React, { useEffect, useState } from 'react';
import { getEvents } from '../../Data/data';
import EventItem from './EventItem';

const Events = ({ admin }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    setEvents(getEvents());
  }, [events]);
  return (
    <div className="container-fluid mt-5 events">
      {events.map((event) => (
        <EventItem
          admin={admin}
          key={event.id}
          event={event}
          className="event"
        />
      ))}
    </div>
  );
};

export default Events;
