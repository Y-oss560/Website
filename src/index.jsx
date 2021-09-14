/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./components/Header";
import Main from "./components/Main";


class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Main header={<Header></Header>}></Main>
      </div >
    )
  }
}

ReactDOM.render(
  <React.StrictMode >
    <App></App>
  </React.StrictMode >,
  document.getElementById('root')
);
