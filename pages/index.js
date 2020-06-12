import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Sup Safari</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>



    <div className='hero'>
    <img src="/logo.svg" width="90%" alt="my image" />
      <p className='description'>
        Suputleie | Supturer
      </p>


    </div>

    <style jsx>{`

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
        background: tomato;
        color: white;
      }
      .hero {
        width: 100%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;

      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
        font-size: 2rem
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
