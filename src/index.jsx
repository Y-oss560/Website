/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
      <div >
        <div >
          <Main header={<Header></Header>}></Main>
        </div >
        <div className="page">
          a00
        </div>
        <div className="page page-bg-gray">
          bbb
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode >
    <App></App>
  </React.StrictMode >,
  document.getElementById('root')
);
