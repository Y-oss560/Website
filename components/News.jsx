import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Hidden, Container } from "@material-ui/core";
import axios from "axios";
import Link from "@material-ui/core/Link";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function News() {
  const [newsItem, setNewsItem] = useState([]);

  useEffect(() => {
    async function init() {
      const response = await axios.get("http://www.suwings.top/mcserver/");
      console.log("response:", response);
      if (response.status === 200) {
        const items = response.data?.items;
        if (items instanceof Array) {
          setNewsItem(items);
        }
      }
    }
    if (newsItem.length === 0) {
      init();
    }
  });

  let newsElement = null;
  if (newsItem.length === 0) {
    newsElement = (
      <div>
        <p>暂无内容</p>
      </div>
    );
  } else {
    const displayItems = newsItem.slice(0, 5);
    newsElement = displayItems.map((v, index) => {
      if (index > 6) return null;
      return (
        <>
          <div style={{ marginBottom: "8px" }}>
            <div
              style={{
                display: "inline-block",
                width: "10%",
              }}
            >
              {v.time}
            </div>
            <div style={{ display: "inline-block", width: "90%" }}>{v.msg}</div>
          </div>
        </>
      );
    });
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <div style={{ fontSize: "12px" }}>{newsElement}</div>
      </Grid>
    </Grid>
  );
}
