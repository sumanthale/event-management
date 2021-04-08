import React from 'react';
import { useHistory } from 'react-router';

const Admin = () => {
  const history = useHistory();
  const makeadmin = () => {
    localStorage.setItem('admin', true);
    window.location.replace('/');
  };
  const removeadmin = () => {
    localStorage.removeItem('admin');
    history.replace('/');
    window.location.replace('/');
  };
  return (
    <div className="container d-flex justify-content-around mt-3">
      <button className="btn btn-outline-dark" onClick={makeadmin}>
        Make me Admin
      </button>
      <button className="btn btn-dark" onClick={removeadmin}>
        Make me User
      </button>
    </div>
  );
};

export default Admin;
