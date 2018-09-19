import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ca from "./ca";
import cb from "./cb";
import Header from "./head";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router basename="/">
          <div>

      <Header />

                  <Switch>
                    <Route exact path="/" component={ca} />
                    <Route path="/ca" component={ca} />
                    <Route path="/cb" component={cb} />
                  </Switch>
</div>
          </Router>

      </div>
    );
  }
}

export default App;
