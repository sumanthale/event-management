import React, { Fragment, useEffect, useState } from 'react';
import { filterByDate, getEvents } from '../../Data/data';
import EventItem from './EventItem';

const Events = ({ admin }) => {
  const [events, setEvents] = useState([]);
  const [filterEvents, setFilterEvents] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  useEffect(() => {}, []);

  useEffect(() => {
    setEvents(getEvents());
  }, [events]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterEvents(filterByDate(from, to));
  };

  const allEvents = filterEvents.length > 0 ? filterEvents : events;
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="container-fluid mt-4">
        <div className="form-row">
          <div className="form-group col-md-5">
            <input
              type="date"
              className="form-control"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-5">
            <input
              type="date"
              className="form-control"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-dark btn-block" type="submit">
              Get
            </button>
          </div>
        </div>
      </form>
      <div className="container-fluid mt-2 events">
        {allEvents.map((event) => (
          <EventItem
            admin={admin}
            key={event.id}
            event={event}
            className="event"
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Events;
