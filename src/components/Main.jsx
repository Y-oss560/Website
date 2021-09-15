import React from 'react';
import Container from '@material-ui/core/Container'
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DnsSharpIcon from '@material-ui/icons/DnsSharp';

export default class Main extends React.Component {

    render() {
        return (
            <div style={{
                paddingBottom: "20px",
                backgroundColor: "rgb(29,39,43)",
                color: "white",
                minHeight: "660px"
            }}>
                <div>
                    {this.props.header}
                </div>
                <Container maxWidth={false}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <div className="page-main-content">
                            <h1>稳定可靠 ，轻量级和开箱即用的 Minecraft 服务端管理面板</h1>
                            <p>现在，你可以立即下载并免费开始使用！</p>
                        </div>
                    </Grid>

                    <Grid container
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <div className="page-main-content">
                            <div style={{ height: "500px", width: "360px" }}>
                                <Card variant="outlined" style={{ height: "100%", textAlign: "left" }}>
                                    <CardContent>

                                        <div style={{ padding: " 12px" }}>
                                            <h2 style={{ marginTop: "0px" }}><b>下载 MCSManager</b></h2>
                                            <p>
                                                请根据您的部署操作系统选择相应的版本下载，如果您选择源代码下载或不包含环境的程序包，则需要您自己安装相应的运行时环境
                                            </p>
                                            <p>
                                                <Button variant="contained" color="primary" size="large" style={{ width: "100%" }}>
                                                    <DesktopWindowsIcon fontSize="inherit" ></DesktopWindowsIcon>&nbsp;下载 Windows 版本
                                                </Button>
                                            </p>
                                            <p>
                                                <Button variant="contained" color="secondary" size="large" style={{ width: "100%" }}>
                                                    <DnsSharpIcon fontSize="inherit"></DnsSharpIcon>&nbsp;下载 Linux 版本
                                                </Button>
                                            </p>
                                            <p>
                                                <small>
                                                    所需运行时环境 Node 14
                                                </small>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="page-main-content" style={{ height: "500px" }}>
                            <img src="./static/index.png" alt="" srcset="" style={{ height: "100%", borderRadius: "4px" }} />
                        </div>
                    </Grid>
                </Container>
            </div >
        );
    }
}