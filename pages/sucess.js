import React from 'react'
import Layout from "../Layout/Layout";
import Link from 'next/link'
import CenterWrapper from '../components/CenterWrapper'
import Fullscreen from '../components/Fullscreen'
import styled from "@emotion/styled";

const Description = styled.div`
    p{
      text-align: center;
      font-size: 1.8rem;
      line-height: 1.6;
      max-width: 700px;
      margin: 3rem 2rem 2rem 2rem;
    }
`;


function App({ data }) {

  return(
  <Layout>

    <Fullscreen image="/img/supsafari.jpg"  text="#fff">
    <img className="logo" loading="lazy" width="160px" src="/logo-red.svg"  alt="sup safari logo" />
    <h1><strong>Wohooo!</strong> <span className="emphazize">Vi har motatt din melding</span></h1>



    </Fullscreen>


      <CenterWrapper>
      <Description>
      <p>
        <div className="logo">
          <Link href="/">
            Tilbake til forsiden
          </Link>
        </div>
      </p>
      </Description>
      </CenterWrapper>


 
</Layout>
)

}

export default App
