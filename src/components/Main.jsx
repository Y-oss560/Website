import React from 'react';
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core';

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
                            <div style={{ height: "500px", width: "340px", backgroundColor: "white" }}>
                                A
                            </div>
                        </div>

                        <div className="page-main-content" style={{ height: "500px" }}>
                            <img src="./static/index.png" alt="" srcset="" style={{ height: "100%" }} />
                        </div>
                    </Grid>
                </Container>
            </div >
        );
    }
}