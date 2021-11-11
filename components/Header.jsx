import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Hidden, Container } from "@material-ui/core";

import style from "./css/header.module.css";

export default function Header() {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#000000ad", position: "absolute" }}
      className={style.header}
    >
      <Toolbar>
        <Container maxWidth="lg">
          <Grid
            spacing={0}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={4}>
              <img src="/static/logo.png" alt="" />
            </Grid>
            <Grid item xs={8}>
              <div
                className="button-group-small"
                style={{ textAlign: "right" }}
              >
                <Hidden mdDown>
                  <Button style={{ color: "white" }}> 文档</Button>

                  <a
                    className="button-alink"
                    href="https://github.com/Suwings/MCSManager-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ color: "white" }}> MCSM UI</Button>
                  </a>
                  <a
                    className="button-alink"
                    href="https://github.com/Suwings/MCSManager"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ color: "white" }}> MCSM 面板端</Button>
                  </a>
                  <a
                    className="button-alink"
                    href="https://github.com/Suwings/MCSManager-Daemon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button style={{ color: "white" }}> MCSM 守护进程</Button>
                  </a>
                </Hidden>
                <a
                  className="button-alink"
                  href="https://mcsmanager.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button style={{ color: "white" }}> MCSM 8 版本</Button>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
