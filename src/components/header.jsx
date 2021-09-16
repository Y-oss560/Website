import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    buttons: {
        textAlign: 'right'
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ backgroundColor: "rgb(0 0 0 / 32%)" }}>
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
                            <img src="static/logo.png" alt="" />
                        </Grid>
                        <Grid item xs={8} className={classes.buttons}>

                            <div className="button-group-small">
                                <Hidden mdDown>
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