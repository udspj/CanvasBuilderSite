import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ca from "./ca";
import cb from "./cb";
import Header from "./components/HeaderBar";
import Footer from "./components/FooterBar";
import HomePage from "./pages/HomePage";
import VideoListPage from "./pages/VideoListPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={VideoListPage} />
              <Route path="/ca" component={ca} />
              <Route path="/cb" component={cb} />
              <Route path="/home" component={HomePage} />
              <Route path="/videolist" component={VideoListPage} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
