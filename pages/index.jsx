import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Reception from "../components/Reception";
import AppInfo from "../components/AppInfo";
export default function index() {
  return (
    <>
      <Header></Header>
      <main>
        <Reception></Reception>
        <AppInfo></AppInfo>
      </main>
      <Footer></Footer>
    </>
  );
}
