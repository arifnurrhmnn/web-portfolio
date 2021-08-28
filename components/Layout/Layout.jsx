import React from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
