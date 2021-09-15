/*
 * @Author: Copyright 2021 Suwings
 * @Date: 2021-09-10 15:00:32
 * @LastEditTime: 2021-09-10 15:13:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';

// import '@fontsource/roboto';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Container from '@material-ui/core/Container'
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Grid from '@material-ui/core/Grid'
import { Hidden, Button } from '@material-ui/core';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import './index.css';
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
                  <BubbleChartIcon style={{ fontSize: 220 }}></BubbleChartIcon>
                </Grid>
              </Hidden>
              <Grid item md={8}>
                <div className="page-content">
                  <h1>这是什么？</h1>
                  <p>MCSManager 面板（简称：MCSM 面板）是一款全中文，轻量级，开箱即用，多实例和支持 Docker 的 Minecraft 服务端管理面板。
                    <br /> 在 Minecraft Java 版中已有一定的流行程度，它可以帮助你集中管理多个服务器，又或者分配账号供其他人使用而不必过于担心安全问题，对于商业活动也有一定的基础功能。</p>
                  <div className="button-group">
                    <Button variant="contained" color="primary" size="large">
                      了解更多
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="page page-bg-gray">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Hidden mdDown>
                <Grid item md={4}>
                  <AccountTreeIcon style={{ fontSize: 220 }}></AccountTreeIcon>
                </Grid>
              </Hidden>
              <Grid item md={8}>
                <div className="page-content">
                  <h1>多节点集中控制</h1>
                  <p>现在已经支持一个控制面板端集中管理控制多台远程主机，任意的远程主机均可供给任何面板端使用</p>
                  <p>
                    <Button variant="contained" color="primary" size="large">
                      学习原理
                    </Button>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="page">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Hidden mdDown>
                <Grid item md={4}>
                  <LocalAtmIcon style={{ fontSize: 220 }}></LocalAtmIcon>
                </Grid>
              </Hidden>
              <Grid item md={8}>
                <div className="page-content">
                  <h1>赞助我们</h1>
                  <p>
                    我们需要您的赞助！我们支持多个平台上的赞助手段，任何赞助成员均可以享受到
                    <span className="text-weight">提前体验 MCSManager 9.0</span>，
                    <span className="text-weight">上榜官方赞助名单</span>
                    和
                    <span className="text-weight">更好的意见反馈</span>
                    等等
                  </p>
                  <div className="button-group">
                    <Button variant="contained" color="secondary" size="large">
                      爱发电平台
                    </Button>
                    <Button variant="contained" color="secondary" size="large">
                      支付宝/微信二维码
                    </Button>
                    <Button variant="contained" color="primary" size="large">
                      加入QQ群
                    </Button>
                  </div>
                  <p className="sub-title">
                    爱发电平台属于正规众筹赞助平台，但需注册账号和绑定支付宝，如果您嫌麻烦可以直接扫描支付宝/微信二维码备注“赞助人名”并且加入QQ群发送给群主
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
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
