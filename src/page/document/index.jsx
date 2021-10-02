import React, { useState } from 'react';
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
import ReactMarkdown from 'react-markdown'

import Box from '@material-ui/core/Box';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
//import ListItemText from '@material-ui/core/ListItemText';

import QuickStart from "./views/QuickStart";
import CreateInstanceApi from "./views/CreateInstance";

import Quickly from "./views/Quickly";
import { links } from './links';
import $ from "jquery";

export default function Index() {

    const navList = links()

    let { path, url } = useRouteMatch();
    const [markdownText, setMarkdownText] = useState("www");

    async function onSelectApi(to) {
        const url = `/markdown${to}.md`;
        console.log(`Req:${url}`)
        const response = $.ajax({
            url,
            success() {
                console.log(response.responseText)
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
                                            <ALink onClick={() => onSelectApi(element.to)}>{element.title} | {element.to}</ALink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Grid>
                    <Grid item xs={8}>
                        {/* <Switch>
                            <Route path={`${path}/quick_start`}>
                                <QuickStart />
                            </Route>
                            <Route path={`${path}/create_instance`}>
                                <CreateInstanceApi />
                            </Route>
                            <Route path={`${path}`}>
                                <Quickly />
                            </Route>
                        </Switch> */}
                        <ReactMarkdown children={markdownText} />
                    </Grid>

                </Grid>
            </div>
        </Container>
    )
}