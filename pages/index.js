import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Sup Safari - Supturer Fredrikstad/Hvaler</title>
      <meta name="description" content="SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skjærgården og på Hvaler."/>
      <meta name="keywords" content="Paddleboard Fredrikstad, SUP Østfold, SUP Hvaler, SUP Rentals, surf, Supbrett Fredrikstad, suputleie, supturer, utleie."/>

      <link rel='icon' href='/favicon.ico' />
    </Head>



    <div className='hero'>
    <img className="logo" src="/logo.svg"  alt="sup safari logo" />
      <p className='description'>
        SUP safari tilbyr utleie av SUP og SUPturer i Fredrikstad og på Hvaler.
        Vi er i oppstartsfasen og tar gjerne en prat. Legg igjen navn og epost, Vi prekæs!
      </p>
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Fornavn: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Epost: <input type="email" name="email" /></label>
  </p>

    <button type="submit">Meld interessse</button>

</form>
    </div>

    <style jsx>{`

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
        background: tomato;
        color: white;
        padding: 1rem;
      }

      button{
        background: #2d2d2d;
        outline: none;
        border-radius: 3px;
        width: 100%;
        padding: .5rem;
        margin: 0 auto;
        color: #fff;
        border: none;
        text-transform: uppercase;
        font-style: italic;
      }

      input{
        border-radius: 3px;
        width: 100%;
        padding: .5rem;
        color: #2d2d2d;
        margin: .2rem 0rem;
        outline: none;
        border: none;
      }

      .logo img{
        max-width: 800px;
        width: 90%;
      }

      .hero {
        margin-top: 10vh;
        width: 100%;
        display: flex;
        min-height: 60vh;
        flex-direction: column;
        justify-content: flex-start;
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
        font-size: 1.2rem;
        line-height: 1.4;
        max-width: 700px;
        margin: 3rem 0rem 1rem 0rem;
      }
    `}</style>
  </div>
)

export default Home
