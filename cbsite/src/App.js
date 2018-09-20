import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ca from "./ca";
import cb from "./cb";
import Header from "./components/HeaderBar";
import Footer from "./components/FooterBar";
import HomePage from "./pages/HomePage";
import VideoListPage from "./pages/VideoListPage";
import DocumentPage from "./pages/DocumentPage";
import AboutPage from "./pages/AboutPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/">
          <div>
            <Header />

            <Switch>
              <Route exact path="/" component={DocumentPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/videolist" component={VideoListPage} />
              <Route path="/document" component={DocumentPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
