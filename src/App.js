import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
          <Users />
        </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
