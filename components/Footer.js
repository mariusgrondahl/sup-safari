import React from 'react'
import styled from "@emotion/styled";

const FooterWrap = styled.div`
  background:turquoise;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 6rem 4rem;
  margin: 3rem 0 0 0; 
  color: #2d2d2d;
  `

export default function Footer(props){
    return(
        <FooterWrap>
            <img className="logo" loading="lazy" width="250px" src="/logo.svg"  alt="sup safari logo" />
            <p>Telefon: <strong>+47 41293362</strong></p>
        </FooterWrap>

    )
}
