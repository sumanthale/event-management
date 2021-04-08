import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addEvent, deleteEvent, getEvent, updateEvent } from '../../Data/data';
import InputFeild from '../reusable/InputFeild';

export default class EditEvent extends Component {
  state = {
    id: '',
    name: '',
    date: '',
    price: '',
    edit: false,
    description: '',
    location: '',
  };
  handleSubmit = () => {
    const { name, date, id, price, description, location } = this.state;
    if (this.state.edit) {
      console.log('update');
      updateEvent({ id, name, date, price, description, location });
    } else {
      addEvent({ name, id, date, price, description, location });
    }
    return this.props.history.push('/events');
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleDelete = () => {
    deleteEvent(this.state.id);
    this.props.history.push('/events');
  };

  componentDidMount() {
    const { eventId } = this.props.match.params;
    if (eventId) {
      const event = getEvent(+eventId);
      if (!event) return this.props.history.push('/event-not-found');
      this.setState({
        id: event.id,
        name: event.name,
        date: event.date,
        price: event.price,
        description: event.description,
        location: event.location,

        edit: true,
      });
    }
  }
  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.name}
              label="Name"
              name="name"
            />
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.date}
              label="Date"
              name="date"
              type="date"
            />
          </div>
          <label>Description</label>
          <textarea
            className="form-control"
            onChange={(e) => this.setState({ description: e.target.value })}
            value={this.state.description}
            label="Description"
            name="description"
            rows="3"
          />
          <div className="form-row">
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.price}
              label="Price"
              name="price"
              type="number"
            />
            <InputFeild
              handleChange={this.handleChange}
              value={this.state.location}
              label="Location"
              name="location"
            />
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <button type="submit" className="btn btn-primary btn-block">
                Add Event
              </button>
            </div>
            <div className="form-group col-md-4">
              <Link to="/events" className="btn btn-warning btn-block">
                Cancel
              </Link>
            </div>
            <div className="form-group col-md-4">
              <button
                className="btn btn-danger btn-block"
                type="button"
                onClick={this.handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
