import React from 'react';
import Container from '@material-ui/core/Container'
import { Button, Card, CardContent, Grid, Hidden, Typography } from '@material-ui/core';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DnsSharpIcon from '@material-ui/icons/DnsSharp';
import GitHubIcon from '@material-ui/icons/GitHub';

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

        this.moreSponsor = [{
            "name": "LL Town Server",
            "price": 2190,
            "message": "LL小镇欢迎你"
        },
        {
            "name": "Mo0oOo0oOo0o",
            "price": 500,
            "message": ""
        },
        {
            "name": "独醉科技",
            "price": 500,
            "message": "独醉科技欢迎你"
        },
        {
            "name": "Phos",
            "price": 1000,
            "message": "VAT"
        },
        {
            "name": "白翼",
            "price": 500,
            "message": ""
        },
        {
            "name": "LiteServer Project",
            "price": 600,
            "message": "mc.kiritow.com"
        },
        {
            "name": "y5221y",
            "price": 500,
            "message": ""
        },
        {
            "name": "烟雨云",
            "price": 288,
            "message": "专注于高端性价比的服务商"
        },
        {
            "name": "明月庄主",
            "price": 200,
            "message": "红石玩家明月庄主前来支持"
        },
        {
            "name": "小灰灰",
            "price": 130,
            "message": ""
        },
        {
            "name": "FzmXer",
            "price": 188,
            "message": ""
        },
        {
            "name": "万鱼网络科技",
            "price": 120,
            "message": ""
        },
        {
            "name": "匪人安安",
            "price": 100,
            "message": ""
        },
        {
            "name": "恭喜",
            "price": 100,
            "message": ""
        },
        {
            "name": "海灵游戏",
            "price": 100,
            "message": "海灵游戏欢迎你"
        },
        {
            "name": "枫叶博客",
            "price": 100,
            "message": "枫叶博客欢迎你"
        },
        {
            "name": "爱克狮",
            "price": 200,
            "message": "白嫖使我快乐"
        },
        {
            "name": "Shuazi233",
            "price": 88.88,
            "message": ""
        },
        {
            "name": "J*y",
            "price": 70,
            "message": ""
        },
        {
            "name": "毅",
            "price": 1001,
            "message": "等待白嫖"
        },
        {
            "name": "拉普达半藏",
            "price": 42,
            "message": ""
        },
        {
            "name": "**琴",
            "price": 40,
            "message": ""
        },
        {
            "name": "一只帕",
            "price": 66,
            "message": "萌化王国 www.mcpa.top"
        },
        {
            "name": "十夏",
            "price": 50.00,
            "message": ""
        },
        {
            "name": "Jiabccc",
            "price": 50.00,
            "message": ""
        },
        {
            "name": "傲世",
            "price": 50.00,
            "message": "傲世云群组服欢迎你"
        },
        {
            "name": "乐创~乐在发明",
            "price": 40.00,
            "message": ""
        },
        {
            "name": "*渊",
            "price": 38.33,
            "message": ""
        },
        {
            "name": "忌辰想要白嫖",
            "price": 30.00,
            "message": ""
        },
        {
            "name": "千以亦",
            "price": 30.00,
            "message": ""
        },
        {
            "name": "SuYun Cloud",
            "price": 30.00,
            "message": "SuYun Cloud 欢迎你"
        },
        {
            "name": "小翼",
            "price": 30.00,
            "message": ""
        },
        {
            "name": "mYrq",
            "price": 30.00,
            "message": ""
        },
        {
            "name": "城南花已开",
            "price": 30,
            "message": ""
        },
        {
            "name": "飒爽师叔",
            "price": 80.00,
            "message": "jmcw.vlssu.com"
        },
        {
            "name": "cookorz",
            "price": 30.00,
            "message": ""
        },
        {
            "name": "小秦",
            "price": 28.88,
            "message": "912yy.com"
        },
        {
            "name": "小红",
            "price": 23.33,
            "message": ""
        },
        {
            "name": "暗夜Dada",
            "price": 23.33,
            "message": ""
        },
        {
            "name": "离风_Mcxixif_",
            "price": 60.00,
            "message": "我爱双羽！"
        },
        {
            "name": "Ym_gg",
            "price": 20.00,
            "message": ""
        },
        {
            "name": "3s5M",
            "price": 20.00,
            "message": ""
        },
        {
            "name": "old_four",
            "price": 20.00,
            "message": ""
        },
        {
            "name": "MinecraftSTL",
            "price": 20.00,
            "message": "QQ：767752419"
        },
        {
            "name": "添加你的昵称",
            "price": 20.00,
            "message": ""
        },
        {
            "name": "RimuruChan",
            "price": 20.00,
            "message": ""
        },
        {
            "name": "DXRYV5",
            "price": 20,
            "message": ""
        },
        {
            "name": "锦江",
            "price": 20,
            "message": ""
        },
        {
            "name": "BrackRat",
            "price": 20,
            "message": "o.iooo.top"
        },
        {
            "name": "牛局长NiuBoss",
            "price": 100,
            "message": "星之源社长来赞助啦！"
        },
        {
            "name": "贰狐",
            "price": 20,
            "message": "由衷感谢大佬的车轮"
        },
        {
            "name": "凉生丶因源",
            "price": 20,
            "message": ""
        },
        {
            "name": "无情",
            "price": 18.00,
            "message": "双羽是我的"
        },
        {
            "name": "小哈",
            "price": 17.00,
            "message": ""
        },
        {
            "name": "*醒",
            "price": 20.00,
            "message": "感谢分享"
        },
        {
            "name": "无语哥",
            "price": 18.88,
            "message": ""
        },
        {
            "name": "嘿咻",
            "price": 16.88,
            "message": ""
        },
        {
            "name": "Future_end",
            "price": 16.66,
            "message": "咕咕咕,日常"
        },
        {
            "name": "天义",
            "price": 15.55,
            "message": ""
        },
        {
            "name": "nikiss",
            "price": 60.00,
            "message": ""
        },
        {
            "name": "Qing",
            "price": 35.00,
            "message": "Qing-Blog mim.ink"
        },
        {
            "name": "Aerovrra",
            "price": 11.00,
            "message": "小游戏群734575579"
        },
        {
            "name": "红儿",
            "price": 12.00,
            "message": ""
        },
        {
            "name": "诸神小G",
            "price": 18.10,
            "message": "www.zsxg.top"
        },
        {
            "name": "Lazy",
            "price": 16.88,
            "message": "www.lazy.ink"
        },
        {
            "name": "Spectre_Lucifer",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "凉生丶因源",
            "price": 10.00,
            "message": "很喜欢，希望继续加油"
        },
        {
            "name": "Patchouli_Go_",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "kpxyyyy",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "KnmP",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "DXRYV5",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "xtAq",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "红尘一世",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "hdf",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "Sprite233",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "Rainink_Mo（雨墨）",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "eSKV",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "单曲循环",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "Zxcvbnm",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "CursoR_光标",
            "price": 10.00,
            "message": ""
        },
        {
            "name": " 佚名战神",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "mc.akashic.cc",
            "price": 10.00,
            "message": "mc.akashic.cc"
        },
        {
            "name": "Taleling",
            "price": 10.00,
            "message": "希望成为家喻户晓的应用"
        },
        {
            "name": "3529726878",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "夜秋呤",
            "price": 10.00,
            "message": ""
        },
        {
            "name": "雪域",
            "price": 20,
            "message": "感谢你们的付出"
        },
        {
            "name": "**洋",
            "price": 10,
            "message": "感谢你们的付出"
        },
        {
            "name": "咩某",
            "price": 20,
            "message": "支持！"
        },
        {
            "name": "Mcayear",
            "price": 10,
            "message": ""
        },
        {
            "name": "XZH",
            "price": 15,
            "message": ""
        },
        {
            "name": "San_hans",
            "price": 66.66,
            "message": ""
        },
        {
            "name": "戌神沁音",
            "price": 20,
            "message": "xdm一起来rua狼鸭"
        },
        {
            "name": "qingfong1234",
            "price": 10,
            "message": ""
        },
        {
            "name": "kjyecn",
            "price": 10,
            "message": "111111"
        },
        {
            "name": "MisakaCloud",
            "price": 10,
            "message": ""
        },
        {
            "name": "末代情人",
            "price": 30,
            "message": ""
        },
        {
            "name": "小陈先生",
            "price": 10,
            "message": ""
        },
        {
            "name": "南山茶馆",
            "price": 50,
            "message": ""
        },
        {
            "name": "Cubik65546",
            "price": 50,
            "message": ""
        },
        {
            "name": "manta",
            "price": 100,
            "message": ""
        },
        {
            "name": "smgoro.top",
            "price": 100,
            "message": ""
        },
        {
            "name": "灵狐",
            "price": 10,
            "message": ""
        },
        {
            "name": "SAO_sun",
            "price": 100,
            "message": ""
        },
        {
            "name": "大白",
            "price": 101,
            "message": "dabaiyun.net"
        },
        {
            "name": "HiCraft",
            "price": 110,
            "message": "嗨块云欢迎你"
        },
        {
            "name": "nmingpei",
            "price": 50,
            "message": ""
        },
        {
            "name": "Sfish",
            "price": 10,
            "message": ""
        },
        {
            "name": "MCSERVERX",
            "price": 20,
            "message": "MCSERVERX管理组前来支持"
        },
        {
            "name": "korostudio.cn",
            "price": 20,
            "message": "korostudio.cn 科洛工作室"
        },
        {
            "name": "Dragin_AjiaoCat",
            "price": 11,
            "message": ""
        },
        {
            "name": "QQ2485638793",
            "price": 10,
            "message": ""
        },
        {
            "name": "Frknopc",
            "price": 10,
            "message": ""
        },
        {
            "name": "鬼皇",
            "price": 10,
            "message": ""
        },
        {
            "name": "霹雳小王子",
            "price": 10,
            "message": ""
        },
        {
            "name": "狼崽",
            "price": 20,
            "message": ""
        },
        {
            "name": "CN_CoreSteb",
            "price": 20,
            "message": ""
        },
        {
            "name": "二哈",
            "price": 10,
            "message": ""
        },
        {
            "name": "云梦泽",
            "price": 12,
            "message": "云梦梦梦子"
        },
        {
            "name": "Yuan",
            "price": 15,
            "message": ""
        },
        {
            "name": "FirstMelody",
            "price": 10,
            "message": ""
        },
        {
            "name": "HIM049",
            "price": 10,
            "message": ""
        },
        {
            "name": "小阚",
            "price": 20,
            "message": "小阚弟弟前来支持"
        },
        {
            "name": "jBdN",
            "price": 10,
            "message": ""
        }
        ]
    }

    componentDidMount() {
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
        this.sponsor.forEach(v => {
            sponsorElems.push(
                <div style={{ width: "200px", height: "40px", display: "inline-block", overflow: "hidden", textAlign: "center" }}>
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
                <Grid item xs={2} key={index}>
                    <Card variant="outlined">
                        <CardContent style={{ padding: "8px" }}>
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
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    style={{ marginBottom: "60px" }}
                >
                    {sponsorElems}
                </Grid>
                <h2>所有赞助成员</h2>
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