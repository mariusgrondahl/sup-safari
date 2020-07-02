import React from 'react'
import styled from "@emotion/styled";

const FooterWrap = styled.div`
  background: darkturquoise;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 4rem 2rem 4rem 2rem;
  margin: 3rem 0 0 0; 
  color: #fff;
    p{
        margin: 0;
    }
  `

export default function Footer(props){
    return(
        <FooterWrap>
            <footer>
            <img className="logo" loading="lazy" width="200px" src="/logo.svg"  alt="sup safari logo" />
            <p>Telefon: <strong>+47 41293362</strong></p>
            </footer>
        </FooterWrap>

    )
}
