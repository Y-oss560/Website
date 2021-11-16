import React, { useState, useEffect } from "react";
import style from "./css/reception.module.css";
import { Button } from "@material-ui/core";

export default function Reception() {
  const [height, setHeight] = useState(400);

  useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);
    setHeight(window.innerHeight);
  }, []);

  return (
    <>
      <div>
        <div className={style.Index} style={{ height, minHeight: "600px" }}>
          <div className={style.TextHello}>
            <h1>
              <span className={style.Highlight}>分布式</span>，
              <span className={style.Highlight}>虚拟化</span>，
              <span className={style.Highlight}>开箱即用</span>，
              <span>支持</span>
              <span className={style.Highlight}> Minecraft </span>
              <span>和其他游戏的服务端管理面板</span>
            </h1>
            <p className="sub-title" style={{ fontSize: "14px" }}>
              现在，您可免费获取它并开始使用！
            </p>
            <div className={style.TextButtonPanel}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={`${style.TextButtonQuickStart} ${style.TextButton}`}
                style={{ margin: "10px", backgroundColor: "#1a7808" }}
              >
                开始使用
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={`${style.TextButton}`}
                style={{ margin: "10px" }}
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
