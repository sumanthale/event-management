import React, { Component, Fragment } from 'react';
import events from '../../Data/data';

import QR from '../QR/QR';
import InputFeild from '../reusable/InputFeild';

export class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      event: '',
      city: '',
      state: '',
      age: '',
      email: '',
      visitorsNames: '',
      phoneNo: '',
      adultsCount: 0,
      childCount: 0,
      food: 0,
      isregistred: false,
      user: null,
    };
  }

  componentDidMount() {
    const {
      params: { eventId },
    } = this.props.match;
    console.log(eventId);
    const event = events.find((event) => event.id === +eventId);
    if (event) {
      this.setState({
        event,
      });
    } else {
      this.props.history.push('/event-not-found');
    }
  }
  componentDidUpdate() {
    console.log('update');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      ...this.state,
      price:
        (+this.state.adultsCount + +this.state.childCount) * 100 +
        +this.state.food,
    };
    this.setState({
      isregistred: true,
      user,
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { adultsCount, childCount, food, isregistred, user } = this.state;

    if (isregistred && user) {
      return <QR data={this.state.user} />;
    }
    return (
      <Fragment>
        <div className="container mt-3">
          <h2 className="alert alert-info text-center">
            {' '}
            Registration For Event: {this.state.event.name} Date:{' '}
            {this.state.event.date}
          </h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.firstName}
                label="First Name"
                name="firstName"
              />
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.lastName}
                label="Last Name"
                name="lastName"
              />
            </div>
            <div className="form-row">
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.address}
                label="Address"
                type="textarea"
                name="address"
              />
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.city}
                label="City"
                name="city"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>State</label>
                <select
                  name="state"
                  id="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="States">Select state...</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                </select>
              </div>
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.age}
                label="Age"
                name="age"
                type="number"
              />
            </div>
            <div className="form-row">
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.email}
                label="Email"
                type="email"
                name="email"
              />
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.phoneNo}
                label="Phone No"
                name="phoneNo"
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Adult Count</label>
                <select
                  name="adultsCount"
                  id="count"
                  value={this.state.adultsCount}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="0">Select..</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>Child Count</label>
                <select
                  name="childCount"
                  id="count"
                  value={this.state.childCount}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="0">select..</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <InputFeild
                handleChange={this.handleChange}
                value={this.state.visitorsNames}
                label="Visitors Names"
                name="visitorsNames"
                type="textarea"
              />
              <div className="form-group col-md-6">
                <label>Food</label>
                <select
                  name="food"
                  id="count"
                  value={this.state.food}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="0">select food..</option>
                  <option value="100">Non-Veg</option>
                  <option value="50">Veg</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">Total Price</h5>
                    <h3 className="card-text">
                      {' '}
                      {(+adultsCount + +childCount) * 100 + +food}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="form-group col-md-6">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
                <button type="reset" className="btn btn-warning btn-block">
                  clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Registration;
