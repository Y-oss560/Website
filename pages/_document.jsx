import Document, { Head, Main, NextScript } from "next/document";

export default class PageDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // 百度统计脚本
    const baiduScript = `
    var _hmt = _hmt || [];
    (function () {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?613715e86a534a1f660d85cd0a42c684";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  `;

    return (
      <html>
        <Head>

          <title>MCSManager | Minecraft 中文管理面板</title>

          <link href="/static/common.css" rel="stylesheet"></link>
          <script dangerouslySetInnerHTML={{ __html: baiduScript }}></script>
          <script src="http://api.mcsmanager.com/mcsm_sponsor.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
