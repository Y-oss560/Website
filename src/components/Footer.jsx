import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "rgb(28,39,43)",
        color: "#c2c2c2",
        fontSize: "13px",
        padding: "60px 0px"
    },
    text: {
        color: "#c2c2c2",
    },
    a: {
        color: "#c2c2c2",
    },
    aLink: {
        color: "#c2c2c2",
        display: "inline-block",
        margin: "0 4px 0px 4px"
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const linksData = [
        { url: "http://mcllxz.cc:88/", title: "LL Town Server" },
        { url: "http://www.mcbbs.net/", title: "Mcbbs 论坛" },
        { url: "https://www.minebbs.com/", title: "Minebbs 论坛" },
        { url: "https://mcsm.imlazy.ink/", title: "Lazy 三方文档" }
    ]
    let links = [];
    linksData.forEach((v, index) => {
        links.push(
            <a key={index} className={classes.aLink} href={v.url}>{v.title}</a>
        )
    })
    return (

        <div className={classes.root} >
            <Container maxWidth="lg">
                <p className={classes.text}>
                    遵循 GPL 开源协议且商业使用需授权 - 版权所有 © 2021 <a className={classes.a} href="https://github.com/Suwings">Suwings</a> All rights reserved.
                </p>
                <p className={classes.text}>
                    <a className={classes.a} href="http://beian.miit.gov.cn/">湘ICP备17022362号</a>
                    <span> - 友情链接</span>
                    {links}
                </p>

            </Container>
        </div >
    );

}