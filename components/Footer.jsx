import React from "react";
import { Container } from "@material-ui/core";
import style from "./css/footer.module.css";

export default function Footer(props) {
  const linksData = [
    { url: "http://mcllxz.cc:88/", title: "LL Town Server" },
    { url: "http://www.mcbbs.net/", title: "Mcbbs 论坛" },
    { url: "https://www.minebbs.com/", title: "Minebbs 论坛" },
    { url: "https://www.lazy.ink/", title: "Lazy's Home" },
  ];
  let links = [];
  linksData.forEach((v, index) => {
    links.push(
      <>
        <a key={index} href={v.url}>
          {v.title}
        </a>
      </>
    );
  });
  return (
    <div className={style.footer}>
      <Container maxWidth="lg">
        <p>
          遵循 GPL 开源协议 - 版权所有 © 2021
          <a href="https://github.com/Suwings">Suwings</a> All rights reserved
        </p>
        <p>
          官方网站和开发文档由 <a href="https://github.com/Suwings">Suwings</a>
          和
          <a
            href="https://github.com/LazyCreeper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lazy
          </a>
          编写与维护
        </p>
        <p>
          <a href="http://beian.miit.gov.cn/">湘ICP备17022362号</a>
          <span> - 友情链接</span>
          {links}
        </p>
      </Container>
    </div>
  );
}
