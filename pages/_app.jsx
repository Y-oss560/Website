// pages/_app.js
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="keywords"
                    content="MCSManager,MCSM,MCSM面板,Minecraft管理面板,MC管理面板"
                />
                <meta
                    name="description"
                    content="MCSManager 管理面板（MCSM 面板）是适用于 Minecraft 游戏服务器的轻量级管理面板"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp