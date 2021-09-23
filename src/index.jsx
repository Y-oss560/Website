/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from "./page/index";
import About from "./page/about";
import Document from "./page/document";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./common.css"

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/document">
              <Document />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </>
    )
  }
}

ReactDOM.render(
  <React.StrictMode >
    <App></App>
  </React.StrictMode >,
  document.getElementById('root')
);
