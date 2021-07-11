import React from "react";
import { Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link , useRouteMatch} from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/xyz">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard/:something?" component={Dashboard} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard({ match }) {
    let matchs = useRouteMatch();
    return (
    <div>
        <h2>Current page {match.params.something}</h2>
        <Button>
           <Link to={`${matchs.url}/sub-link`}>Sub Link</Link>  
        </Button>

        <h2>Current Link/url {matchs.url}</h2>
        <Route path={`/dashboard/${match}/:something?`} component={Dashboard} />
        <h2>Current Link/url {matchs.url}</h2>
    </div>
  );
}


export default BasicExample;