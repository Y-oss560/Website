import React from 'react';
import Container from '@material-ui/core/Container'
import { Button, Card, CardContent, Grid, Hidden, Typography } from '@material-ui/core';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DnsSharpIcon from '@material-ui/icons/DnsSharp';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Main extends React.Component {

    toGithub() {
        window.open("https://github.com/Suwings/MCSManager")
    }

    render() {
        return (
            <div className="page-main">
                <div>
                    {this.props.header}
                </div>
                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <div className="page-main-content" style={{ marginTop: "30px" }}>
                            <h1 >
                                <span className="text-yellow">分布式集群</span>，
                                <span className="text-yellow">可群组</span>，
                                <span className="text-yellow">轻量级</span>
                                和
                                <span className="text-yellow">开箱即用</span>
                                的 Minecraft 服务端
                                <span className="text-yellow">管理面板</span>
                            </h1>
                            <p>现在处于内部开发测试中，有且只有赞助人员可以优先获得体验，您还无法免费下载它</p>
                        </div>
                    </Grid>

                    <Grid container
                        spacing={2}
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <div className="page-main-content">
                            <div style={{ height: "500px", width: "360px" }}>
                                <Card variant="outlined" style={{ height: "100%", textAlign: "left" }}>
                                    <CardContent>

                                        <div style={{ padding: " 12px" }}>
                                            <h2 style={{ marginTop: "0px" }}><b>下载 MCSManager</b></h2>
                                            <p>
                                                根据您的部署操作系统选择相应的版本下载，如果您选择源代码下载或不包含环境的程序包，则需要您自己安装相应的运行时环境
                                            </p>
                                            <p>
                                                <Button variant="contained" color="primary" size="large" style={{ width: "100%" }} disabled={true}>
                                                    <DesktopWindowsIcon fontSize="inherit" ></DesktopWindowsIcon>&nbsp;下载 Windows 版本
                                                </Button>
                                            </p>
                                            <p>
                                                <Button variant="contained" color="secondary" size="large" style={{ width: "100%" }} disabled={true}>
                                                    <DnsSharpIcon fontSize="inherit"></DnsSharpIcon>&nbsp;下载 Linux 版本
                                                </Button>
                                            </p>
                                            <p>
                                                源代码
                                            </p>
                                            <p>
                                                <Button variant="contained" size="large" style={{ width: "100%" }} onClick={this.toGithub}>
                                                    <GitHubIcon fontSize="inherit"></GitHubIcon>&nbsp;Github
                                                </Button>
                                            </p>
                                            <p style={{ color: "gray" }}>
                                                <small>
                                                    运行时环境 Node 14+<br />
                                                    遵循 GPL 开源协议，商业使用需授权
                                                </small>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <Hidden mdDown>
                            <div className="page-main-content" style={{ height: "500px" }}>
                                <img src="./static/index.png" alt="" srcset="" style={{ height: "100%", borderRadius: "4px", border: "1px solid rgba(0, 0, 0, 0.12)" }} />
                            </div>
                        </Hidden>

                    </Grid>
                </Container>
            </div >
        );
    }
}