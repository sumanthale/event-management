import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const EventItem = ({ event, admin }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/events/edit/${event.id}`);
  };
  return (
    <div className="card">
      {' '}
      <img
        src="https://images.unsplash.com/photo-1527075240784-552cddfbb143?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>{' '}
        <div className="h5 ">Price: {event.price} per Head</div>
        <p className="card-text">{event.description}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/register/${event.id}`} className="btn btn-success">
            Go Register
          </Link>
          {admin && (
            <button onClick={handleClick} className="btn btn-warning">
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventItem;
