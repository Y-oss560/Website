import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Container } from '@material-ui/core';
import {
    Link,
} from "react-router-dom";
import { Router, useParams, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    buttons: {
        textAlign: 'right'
    },
    appbar1: {
        backgroundColor: "rgb(0 0 0 / 32%)",
        position: "fixed",
        top: "0px",
    },
    appbar2: {
        backgroundColor: "rgb(35 34 40 / 100%)",
        position: "fixed",
        top: "0px",
    },
    appbar3: {
        backgroundColor: "rgb(35 34 40 / 100%)",
    }
}));

export default function Header() {
    const classes = useStyles();

    const { pathname } = useLocation();

    const [appBarClass, setAppBarClass] = useState("appbar1");

    function setSpecialClass() {
        if (pathname !== "/")
            setAppBarClass("appbar3")
        else
            setAppBarClass("appbar1")
    }


    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log("useEffect()")
        setSpecialClass();
        window.onscroll = function () {
            if (window.scrollY > 0) {
                setAppBarClass("appbar2")
            } else {
                setSpecialClass();
            }
        }
        return function () {
            window.onscroll = () => { }
        }
    }, [pathname]);


    return (
        <AppBar position="static" className={classes[appBarClass]}>
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
                            <Link to="/">
                                <img src="/static/logo.png" alt="" />
                            </Link>
                        </Grid>
                        <Grid item xs={8} className={classes.buttons}>

                            <div className="button-group-small">
                                <Hidden mdDown>
                                    <Link to="/document">
                                        <Button style={{ color: "white" }}> 文档</Button>
                                    </Link>
                                    <a className="button-alink" href="https://github.com/Suwings/MCSManager-UI" target="_blank" rel="noopener noreferrer">
                                        <Button style={{ color: "white" }}> MCSM UI</Button>
                                    </a>
                                    <a className="button-alink" href="https://github.com/Suwings/MCSManager" target="_blank" rel="noopener noreferrer">
                                        <Button style={{ color: "white" }}> MCSM 面板端</Button>
                                    </a>
                                    <a className="button-alink" href="https://github.com/Suwings/MCSManager-Daemon" target="_blank" rel="noopener noreferrer">
                                        <Button style={{ color: "white" }}> MCSM 守护进程</Button>
                                    </a>
                                </Hidden>
                                <a className="button-alink" href="https://mcsmanager.com/" target="_blank" rel="noopener noreferrer">
                                    <Button style={{ color: "white" }}> MCSM 8 版本</Button>
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar >
    )

}
