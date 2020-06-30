import React, { useEffect } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GlobalCss from "./GlobalCss";

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0rem 0rem 4rem 0rem;
  @media only screen and (min-width: 700px) {
    padding: 0rem 0rem 5rem 0rem;
  }
`;
const Layout = ({ children, title = "Sup Safari - Suputleie Fredrikstad og Hvaler" }) => (
    <html>
    <GlobalCss />
      <body>
        <Head>
          <title>{title}</title>
          <meta name="description" content="SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skjærgården og på Hvaler."/>
          <meta name="keywords" content="Paddleboard, Utleie, SUP, Østfold,Hvaler, Fredrikstad , Sarpsborg, turer, safari, leie, paddlebrett, stand up paddle"/>
          <link rel='icon' href='/favicon.ico' />

          <meta property="og:image" content="https://sup-safari.no/img/supsafari-logo.jpg" />
          <meta property="og:image:width" content="1280" />
        </Head>
      
        <NavBar />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </body>
    </html>
);

export default Layout;
