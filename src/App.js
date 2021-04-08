import './App.css';
import Registration from './components/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Events from './components/Home/Events';
import EditEvent from './components/Home/EditEvent';
import { useEffect, useState } from 'react';
import Admin from './components/Home/Admin';

function App() {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    const isadmin = localStorage.getItem('admin');
    setAdmin(isadmin);
  }, [admin]);
  return (
    <Router>
      <div>
        <NavBar admin={admin} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={Admin} />
          <Route
            path="/events"
            exact
            component={() => <Events admin={admin} />}
          />

          <CustomRoute path="/events/edit" exact component={EditEvent} />
          <CustomRoute
            path="/events/edit/:eventId"
            exact
            component={EditEvent}
          />

          <Route path="/register/:eventId" component={Registration} exact />
          <Route
            path="/event-not-found"
            render={() => <div>NO Event Found</div>}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const CustomRoute = (props) => {
  const admin = localStorage.getItem('admin');
  if (admin) {
    return <Route {...props} />;
  }
  return <Redirect to="/" />;
};
