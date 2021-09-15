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
                        spacing={2}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={6}>
                            <img src="static/logo.png" alt="" />
                        </Grid>
                        <Grid item xs={6} className={classes.buttons}>
                            <Button color="inherit">Github</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar >
    )

}