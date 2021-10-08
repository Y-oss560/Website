import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ALink from '@material-ui/core/Link'
import ReactMarkdown from 'react-markdown'
import $ from "jquery";

import { links } from './links';
import "./md.css"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


import axios from "axios"


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Index() {

    // Markdown 文本变量
    const [markdownText, setMarkdownText] = useState("");

    // Other State
    const [openAlert, setOpenAlert] = React.useState({
        open: false,
        title: ""
    });
    const [loading, setLoading] = useState(true);


    // 获取菜单项
    const navList = links();

    // 副作用函数
    useEffect(() => {
        if (markdownText === "") {
            onSelectApi("/quick_start")
        }
    }, [markdownText])


    // 选择 API 事件，自动远程加载
    async function onSelectApi(to) {
        if (!to) {
            if (!openAlert.open) {
                setOpenAlert({
                    open: true,
                    title: "此页面还在编写中，过几天再来看看吧"
                });
            }
            return
        }
        let url = `/markdown${to}.md`;
        if (to === "/" || !to) {
            url = `/markdown/quick_start.md`;
        }
        setLoading(true);
        const response = await axios.get(url)
        setLoading(false);
        setMarkdownText(response.data);
        window.scrollTo(0, 0);
    }

    function closeAlert() {
        setOpenAlert({
            open: false,
            title: ""
        })
    }

    function ReactMarkdownArea(props) {
        if (loading) {
            return (
                <div style={{
                    height: "400px", display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>
                    <CircularProgress />
                </div>
            )
        } else {
            return <ReactMarkdown  {...props} />
        }
    }



    // HTML 模板
    return (
        <>
            <Container maxWidth="lg">
                <div style={{ marginTop: "24px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ul style={{ listStyleType: " none" }}>
                                {
                                    navList.map((element) => {
                                        if (element.type === 2) {
                                            return (
                                                <li>
                                                    <h3>{element.title}</h3>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li style={{ margin: "2px 0px", fontSize: "14px" }}>
                                                    <ALink style={{ cursor: "pointer" }} onClick={() => onSelectApi(element.to)}>{element.title}</ALink>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </Grid>
                        <Grid item xs={8}>
                            <ReactMarkdownArea children={markdownText} />
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <Snackbar open={openAlert.open} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3000} onClose={closeAlert}>
                <Alert severity="warning" onClose={closeAlert}>
                    {openAlert.title}
                </Alert>
            </Snackbar>
        </>
    )
}