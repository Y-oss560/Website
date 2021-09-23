import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ALink from '@material-ui/core/Link'
import { Link } from "react-router-dom";

export default function Index() {

    const navList = [
        {
            title: "教程",
            to: "/",
            type: 2
        },
        {
            title: "快速开始",
            to: "/",
            type: 1
        },
        {
            title: "搭建开发环境",
            to: "/",
            type: 1
        },
        {
            title: "身份验证",
            to: "/",
            type: 2
        },
        {
            title: "基于 API 密钥的身份验证",
            to: "/",
            type: 1
        },
        {
            title: "基于明文账号密码的身份验证",
            to: "/",
            type: 1
        },
        {
            title: "实例操作",
            to: "/",
            type: 2
        },
        {
            title: "创建实例",
            to: "/",
            type: 1
        },
        {
            title: "修改实例",
            to: "/",
            type: 1
        },
        {
            title: "删除实例",
            to: "/",
            type: 1
        },
        {
            title: "获取实例列表",
            to: "/",
            type: 1
        }, {
            title: "远程服务节点操作",
            to: "/",
            type: 2
        },
        {
            title: "创建连接",
            to: "/",
            type: 1
        },
        {
            title: "删除连接",
            to: "/",
            type: 1
        },
        {
            title: "更新密钥",
            to: "/",
            type: 1
        },
        {
            title: "获取实例列表",
            to: "/",
            type: 1
        },
    ]

    return (
        <Container maxWidth="lg">
            <div style={{ marginTop: "24px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>AA</Grid>
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
                                            <Link to={element.to}>
                                                <ALink>{element.title}</ALink>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}