import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ALink from '@material-ui/core/Link'
import { Link } from "react-router-dom";

import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
//import ListItemText from '@material-ui/core/ListItemText';

import QuickStart from "./views/QuickStart";
import CreateInstanceApi from "./views/CreateInstance";

import Quickly from "./views/Quickly";

export default function Index() {

    const navList = [
        {
            title: "教程",
            to: "",
            type: 2
        },
        {
            title: "快速开始",
            to: "/quick_start",
            type: 1
        },
        {
            title: "搭建开发环境",
            to: "",
            type: 1
        },
        {
            title: "身份验证",
            to: "",
            type: 2
        },
        {
            title: "基于 API 密钥的身份验证",
            to: "",
            type: 1
        },
        {
            title: "基于明文账号密码的身份验证",
            to: "",
            type: 1
        },
        {
            title: "实例管理",
            to: "",
            type: 2
        },
        {
            title: "创建实例",
            to: "/create_instance",
            type: 1
        },
        {
            title: "修改实例",
            to: "",
            type: 1
        },
        {
            title: "删除实例",
            to: "",
            type: 1
        },
        {
            title: "获取实例列表",
            to: "",
            type: 1
        },
        {
            title: "与实例建立 Websocket 连接",
            to: "",
            type: 1
        },
        {
            title: "开启实例",
            to: "",
            type: 1
        },
        {
            title: "关闭实例",
            to: "",
            type: 1
        },
        {
            title: "重启实例",
            to: "",
            type: 1
        },
        {
            title: "终止实例",
            to: "",
            type: 1
        },
        {
            title: "远程服务管理",
            to: "",
            type: 2
        },
        {
            title: "创建连接",
            to: "",
            type: 1
        },
        {
            title: "删除连接",
            to: "",
            type: 1
        },
        {
            title: "立刻连接",
            to: "",
            type: 1
        },
        {
            title: "更新密钥",
            to: "",
            type: 1
        },
        {
            title: "获取所有远程服务信息",
            to: "",
            type: 1
        },
        {
            title: "根据条件查询远程服务",
            to: "",
            type: 1
        },
        {
            title: "计划任务管理",
            to: "",
            type: 2
        },
        {
            title: "创建计划任务",
            to: "",
            type: 1
        },
        {
            title: "修改计划任务",
            to: "",
            type: 1
        },
        {
            title: "删除计划任务",
            to: "",
            type: 1
        },
        {
            title: "获取计划任务列表",
            to: "",
            type: 1
        },
        {
            title: "镜像管理",
            to: "",
            type: 2
        },
        {
            title: "创建镜像",
            to: "",
            type: 1
        },
        {
            title: "获取镜像列表",
            to: "",
            type: 1
        },
        {
            title: "删除镜像",
            to: "",
            type: 1
        },
        {
            title: "获取镜像列表",
            to: "",
            type: 1
        },
        {
            title: "获取容器列表",
            to: "",
            type: 1
        },
        {
            title: "获取镜像构建进度",
            to: "",
            type: 1
        },
    ]

    let { path, url } = useRouteMatch();

    console.log(path, url)

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
                                            <Link to={url + element.to}>
                                                <ALink>{element.title} | {url + element.to}</ALink>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {/*<Box sx={{ width: '100%', maxWidth: 360 }}>
                            <nav aria-label="">
                                <List>
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
                                            <span>
                                                <ListItemText to={url + element.to} primary="{element.title} | {url + element.to}" />
                                            </span>
                                                
                                        )
                                    })
                                    }
                                </List>
                            </nav>
                        </Box>*/}
                    </Grid>
                    <Grid item xs={8}>
                        <Switch>
                            <Route path={`${path}/quick_start`}>
                                <QuickStart />
                            </Route>
                            <Route path={`${path}/create_instance`}>
                                <CreateInstanceApi />
                            </Route>
                            <Route path={`${path}`}>
                                <Quickly />
                            </Route>
                        </Switch>
                    </Grid>
                    
                </Grid>
            </div>
        </Container>
    )
}