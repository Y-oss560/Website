/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '@fontsource/roboto';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from '@material-ui/core/Container'
import DashboardIcon from '@material-ui/icons/Dashboard';
import Grid from '@material-ui/core/Grid'
import { Hidden } from '@material-ui/core';


class App extends React.Component {
  render() {
    return (
      <div >
        <div >
          <Main header={<Header></Header>}></Main>
        </div >
        <div className="page">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Hidden mdDown>
                <Grid item md={4}>
                  <DashboardIcon style={{ fontSize: 300 }}></DashboardIcon>
                </Grid>
              </Hidden>
              <Grid item md={8}>
                <div className="page-content">
                  <h2>这是什么？</h2>
                  <p>MCSManager 面板（简称：MCSM 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。
                    <br /> 在 Minecraft Java 版中已有一定的流行程度，它可以帮助你集中管理多个服务器，又或者分配账号供其他人使用而不必过于担心安全问题，对于商业活动也有一定的基础功能。</p>
                </div>
              </Grid>
            </Grid>
          </Container>
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
