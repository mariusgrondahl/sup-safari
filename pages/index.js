import React from 'react'
import Layout from "../Layout/Layout";
import ContactForm from '../components/ContactForm'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";

const Description = styled.div`
    p{
      text-align: center;
      line-height: 1.6;
      max-width: 700px;
      margin: 3rem 2rem 2rem 2rem;
    }
`;


function App({ data }) {

  return(
  <Layout>

    <Fullscreen image="/img/supsafari.jpg"  text="#fff">
    <img className="logo" loading="lazy" width="200px" src="/logo-red.svg"  alt="sup safari logo" />
    <h1>SUP-utleie i Fredrikstad og Hvaler</h1>
    </Fullscreen>


      <CenterWrapper>
      <Description>
      <p>
      Opplev elver, innsjøer og skjærgården stående!
      Vi tilbyr utleie av SUPbrett til <strong>paddleturer i Fredrikstad og Hvaler-regionen.</strong>
      Vi tar gjerne en prat. Legg igjen navn og epost og når du ønsker å leie. Vi prekæs &#128526; 
      </p>
      </Description>
      <ContactForm />
      </CenterWrapper>


 
</Layout>
)

}

export default App
