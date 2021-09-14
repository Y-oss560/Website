import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: "100%",
//         backgroundColor: "red"
//     }
// }));

// export default function Main() {
//     const classes = useStyles();
//     return (
//         <div className={classes.root}>
//             A
//             {props.Header}
//         </div>
//     )

// }

export default class Main extends React.Component {
    render() {
        return (
            <div style={{
                height: "100%",
                backgroundColor: "rgb(29,39,43)"
            }}>
                {this.props.header}
                B
            </div >
        );
    }
}