import React from 'react'
import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import Fullscreen from '../components/Fullscreen'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <Head>
      <title>Sup Safari - Suputleie Fredrikstad og Hvaler</title>
      <meta name="description" content="SUP Safari tilbyr SUP-utleie og SUP-turer i Fredrikstad skjærgården og på Hvaler."/>
      <meta name="keywords" content="Paddleboard utleie, SUP Østfold, SUP Hvaler, SUP Utleie, Supbrett Fredrikstad, supturer, leie supbrett."/>

      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Fullscreen image="/img/supsafari-hvaler.jpg"  text="#fff">
    <img className="logo" loading="lazy" width="250px" src="/logo-red.svg"  alt="sup safari logo" />

    <h1>SUP-utleie i Fredrikstad og Hvaler</h1>
    </Fullscreen>

    <div className='hero'>
      <p className='description'>
      Opplev elver, innsjøer og skjærgården stående!
      Vi tilbyr utleie av SUPbrett til <strong>paddleturer i Fredrikstad og Hvaler-regionen.</strong>
      Vi tar gjerne en prat. Legg igjen navn og epost og når du ønsker å leie. Vi prekæs &#128526; 
      </p>
      <ContactForm />
    </div>
    <Footer />

    <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,700&display=swap');
      :global(body) {
        font-size: 16px;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
        background: AQUAMARINE;
        color: #2d2d2d;
      }
      
      a{
        color: yellow;
      }

      .logo{
        max-width: 550px;
        margin-bottom: 2.5rem;
      }

      h1{
        font-size: 3rem;
        line-height: 3rem;
        text-align: center;
        margin: 0rem 2rem;
        font-family: 'Barlow', BlinkMacSystemFont, Avenir Next, Avenir;
        color: white;
        text-shadow: 1px 1px 1px #000;
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


      .description {
        text-align: center;
        font-size: 1.2rem;
        line-height: 1.4;
        max-width: 700px;
        margin: 1rem 1rem 1rem 1rem;
      }

    `}</style>
  </div>
)

export default Home
