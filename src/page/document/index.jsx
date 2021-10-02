import React, { useState } from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ALink from '@material-ui/core/Link'
import ReactMarkdown from 'react-markdown'
import $ from "jquery";

import { links } from './links';
import "./md.css"


export default function Index() {

    const navList = links()


    const [markdownText, setMarkdownText] = useState("开发版本，请选择左侧菜单显示远程动态内容");

    // 选择 API 事件，自动远程加载
    async function onSelectApi(to) {
        let url = `/markdown${to}.md`;
        if (to === "/" || !to) {
            url = `/markdown/quick_start.md`;
        }
        const response = $.ajax({
            url,
            success() {
                const text = response.responseText;
                setMarkdownText(text);
            }
        });

    }



    return (
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
                                                <p>{element.title}</p>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li style={{ margin: "4px 0px", fontSize: "13px" }}>
                                            <ALink style={{ cursor: "pointer" }} onClick={() => onSelectApi(element.to)}>{element.title}</ALink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Grid>
                    <Grid item xs={8}>
                        <ReactMarkdown children={markdownText} />
                    </Grid>

                </Grid>
            </div>
        </Container>
    )
}