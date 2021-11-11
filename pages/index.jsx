import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import AppInfo from "../components/AppInfo";
export default function index() {
  return (
    <>
      <Header></Header>
      <main>
        <Main></Main>
        <AppInfo></AppInfo>
      </main>
      <Footer></Footer>
    </>
  );
}
