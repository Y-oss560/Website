import React from 'react';
import Container from '@material-ui/core/Container'
import { Button, Card, CardContent, Grid, Hidden, Typography } from '@material-ui/core';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DnsSharpIcon from '@material-ui/icons/DnsSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import axios from 'axios';

export default class Sponsor extends React.Component {

    constructor() {
        super()
        this.state = {
            showMoreSponsor: false,
            displayMoreSponsor: []
        }
        this.sponsor = [
            {
                title: "LL小镇",
                url: "http://www.llxz.cc/",
                img: "1.png"
            },
            {
                title: "独醉科技",
                url: "http://www.duzuii.com/",
                img: "2.png"
            },
            {
                title: "翼术悦坊",
                url: "https://www.elyart.cn/",
                img: "3.jpg"
            },
            {
                title: "MarkCode",
                url: "https://o.ls/",
                img: "4.png"
            }
        ]

        this.moreSponsor = []
    }

    componentDidMount() {
        this.moreSponsor = window.sponsorList ? window.sponsorList() : [];
        this.selectDisplay(false)
    }

    selectDisplay(b) {
        // 冒泡排序
        const array = this.moreSponsor;
        for (const k in array) {
            for (const j in array) {
                if (array[k].price > array[j].price) {
                    const tmp = array[k];
                    array[k] = array[j];
                    array[j] = tmp;
                }
            }
        }
        // 隐藏更多人数
        if (b) {
            this.setState({
                displayMoreSponsor: array,
                showMoreSponsor: true
            });
        } else {
            const displayItems = array.filter(v => {
                return v.price >= 100
            })
            this.setState({
                displayMoreSponsor: displayItems,
                showMoreSponsor: false
            });
        }

    }

    sponsorButton() {
        if (!this.state.showMoreSponsor) {
            return (
                <Button variant="outlined" color="primary" onClick={() => { this.selectDisplay(true) }}>
                    展开赞助名单
                </Button>
            )
        } else {
            return (
                <Button variant="outlined" color="primary" onClick={() => { this.selectDisplay(false) }}>
                    收缩赞助名单
                </Button>
            )
        }
    }

    render() {
        const sponsorElems = [];
        this.sponsor.forEach((v, index) => {
            sponsorElems.push(
                <div key={index} style={{ width: "200px", height: "40px", display: "inline-block", overflow: "hidden", textAlign: "center" }}>
                    <a href={v.url} target="_blank" rel="noreferrer">
                        <img src={'static/sponsor/' + v.img} alt={v.title} style={{ height: "100%" }} />
                    </a>
                </div>
            )
        });

        // 赞助名单渲染
        const moreSponsor = [];
        this.state.displayMoreSponsor.forEach((v, index) => {
            moreSponsor.push(
                <Grid item xs={4} md={2} key={index}>
                    <Card variant="outlined">
                        <CardContent style={{ padding: "8px", height: "66px", overflow: "hidden" }}>
                            <p style={{ margin: "0px", fontSize: "13px" }}><b>{v.name}</b></p>
                            <p style={{ margin: "0px", fontSize: "12px" }}><small>￥{v.price}</small></p>
                            <p style={{ margin: "0px", fontSize: "12px" }} className="sub-title"><small>{v.message ? v.message : "--"}</small></p>
                        </CardContent>
                    </Card>
                </Grid >
            )
        })

        return (
            <div>
                <h2>重要赞助商</h2>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    style={{ marginBottom: "60px" }}
                >
                    {sponsorElems}
                </Grid>
                <h2 style={{ marginBottom: "0px" }}>所有赞助成员</h2>
                <p className="sub-title">赞助名单并不是实时刷新，由人工定期进行数据更新，</p>
                <Grid container spacing={1}>
                    {moreSponsor}
                    <Grid item xs={12}>
                        {this.sponsorButton()}
                    </Grid>
                </Grid>
            </div >
        );
    }
}