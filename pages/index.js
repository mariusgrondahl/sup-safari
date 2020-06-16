import React from 'react'
import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Fullscreen from '../components/Fullscreen'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <Head>
      <title>Sup Safari - Supturer Fredrikstad/Hvaler</title>
      <meta name="description" content="SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skjærgården og på Hvaler."/>
      <meta name="keywords" content="Paddleboard Fredrikstad, SUP Østfold, SUP Hvaler, SUP Rentals, surf, Supbrett Fredrikstad, suputleie, supturer, utleie."/>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Fullscreen image="/img/supsafari-hvaler.jpg" height="45vh">
      <img className="logo" src="/logo-red.svg"  alt="sup safari logo" />
    </Fullscreen>

    <div className='hero'>
      <p className='description'>
        Vi tilbyr utleie av SUP til <strong>SUPturer i Fredrikstad og på Hvaler.</strong>
        Vi er i oppstartsfasen og tar gjerne en prat. Legg igjen navn og epost. Vi prekæs &#128526; 
      </p>
      <ContactForm />
    </div>
    <Footer />

    <style jsx>{`

      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
        background:turquoise;
        color: #2d2d2d;
      }

      .logo{
        width: 90%;
        max-width: 550px;
      }


      .hero {
        margin-top: 3rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        min-height: 30vh;

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
        font-size: 1.4rem;
        line-height: 1.4;
        max-width: 700px;
        margin: 3rem 1rem 1rem 1rem;
      }
    `}</style>
  </div>
)

export default Home
