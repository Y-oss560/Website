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
import Sponsor from "./components/Sponsor";
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExploreIcon from '@material-ui/icons/Explore';

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
                    <a className="button-alink" href="https://github.com/Suwings/MCSManager/issues/467" target="_blank" rel="noopener noreferrer">
                      <Button variant="contained" color="primary" size="large">
                        了解更多
                      </Button>
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className="page page-bg-gray">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item md={8}>
                <div className="page-content">
                  <h1>更好的稳定性，更多的扩展性</h1>
                  <p>采用 Typescript 全面重构，守护进程经过大规模压力测试与多次内部测试，拥有更好的稳定性与可靠性。采用 90% 的 HTTP 接口和 20% 的 WebSocket 接口，几乎所有面板功能接口就是 API 接口。</p>
                  <p>
                  </p>
                </div>
              </Grid>
              <Hidden mdDown>
                <Grid item md={4} style={{ textAlign: "right" }}>
                  <DashboardIcon style={{ fontSize: 220 }}></DashboardIcon>
                </Grid>
              </Hidden>
            </Grid>
          </Container>
          <Container maxWidth="lg" style={{ marginTop: "18px", overflow: "hidden" }}>
            <Grid container spacing={10}>

              <Grid item md={6}>
                <div className="page-content">
                  <h1>更齐全的 API 接口</h1>
                  <p>如果您是一位开发者，那么这些 API 接口相一定能够得到您的爱慕，我们提供了比上一代多两倍的接口与更齐全的数据格式。</p>
                  <div className="button-group">
                    <Button variant="contained" size="large" disabled={true}>
                      查看文档
                    </Button>
                  </div>
                </div>
              </Grid>

              <Grid item md={6}>
                <Grid container spacing={2}>
                  <div className="page-content">
                    <h1>多节点集中控制</h1>
                    <p>现在已经支持一个控制面板端集中管理控制多台远程主机，任意的远程主机均可供给任何面板端使用。</p>
                    <p>
                      <Button variant="contained" size="large" disabled={true}>
                        学习原理
                      </Button>
                    </p>
                  </div>
                </Grid>
              </Grid>

              <Grid item md={6}>
                <div className="page-content">
                  <h1>更快的开箱即用</h1>
                  <p>在 Windows 下，您只需要下载压缩包双击即可运行面板，接下来的环境与相应配置面板将会自动完成。在 Linux 下也仅仅只需要使用一键安装脚本即可安装。</p>
                </div>
              </Grid>

              <Grid item md={6}>
                <div className="page-content">
                  <h1>更优雅的网页设计</h1>
                  <p>使用 Vue 生态大部分技术与框架，重新设计 UI 与交互方式，打造出更优雅更实用的响应式前端网页。</p>
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
                    等等。
                  </p>
                  <div className="button-group">
                    <Button variant="contained" color="primary" size="large" onClick={() => window.open("https://afdian.net/@mcsmanager")}>
                      爱发电平台
                    </Button>
                    <Button variant="contained" color="primary" size="large">
                      支付宝/微信二维码
                    </Button>
                    <Button variant="contained" size="large" onClick={() => window.open("https://jq.qq.com/?_wv=1027&k=kCZMJRBn")}>
                      加入QQ群
                    </Button>
                  </div>
                  <p className="sub-title">
                    爱发电平台属于正规赞助平台，你也可以直接扫描支付宝/微信二维码备注“赞助人名”并且加入QQ群发送给群主。
                  </p>
                </div>
              </Grid>
            </Grid>
            {/* 赞助名单 */}
            <Sponsor></Sponsor>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              <div style={{ textAlign: "center" }}>
                <h3>没有上述名单成员的支持与赞助，就不会有 MCSManager 项目的长期维护。</h3>
                <p className="text-gray">对上述名单全体成员的无私奉献表达谢意。</p>
              </div>
            </Grid>
          </Container>
        </div>


        <div className="page page-bg-gray">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Hidden mdDown>
                <Grid item md={4}>
                  <ExploreIcon style={{ fontSize: 220 }}></ExploreIcon>
                </Grid>
              </Hidden>
              <Grid item md={8}>
                <div className="page-content">
                  <h1>旧版本迁移</h1>
                  <p>两者版本数据文件差异过大，无法直接升级迁移。如果您已经形成自己的产品链或部署一切正常，可以不必考虑迁移升级到 MCSManager 9 版本，您依然可以继续使用 MCSManager 8 版本。</p>
                  <div className="button-group">
                    <a className="button-alink" href="https://mcsmanager.com/" target="_blank" rel="noopener noreferrer">
                      <Button variant="contained" color="primary" size="large" >
                        MCSManager 8 官方网站
                      </Button>
                    </a>
                    <a className="button-alink" href="https://github.com/Suwings/MCSManager/wiki/%E5%8D%87%E7%BA%A7%E5%88%B0-MCSManager-9.0" target="_blank" rel="noopener noreferrer">
                      <Button variant="contained" color="primary" size="large">
                        迁移教程
                      </Button>
                    </a>
                  </div>
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
