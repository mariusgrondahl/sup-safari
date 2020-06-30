import React from "react";
import styled from "@emotion/styled";

const FullscreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  background: url(${props => props.image});
  background-position: bottom center;
  background-size: cover;
  color: ${props => props.text};
  padding-bottom: 4rem;
  width: 100%;
  box-sizing: border-box;
  height: 85vh;

  h1{
        font-size: 4.5rem;
        line-height: 5rem;
        text-align: center;
        margin: 0rem 2rem;
        font-family: 'Barlow', BlinkMacSystemFont, Avenir Next, Avenir;
        color: white;
        text-shadow: 1px 1px 1px #000;

        @media (min-width: 700px) {
          font-size: 7rem;
          line-height: 7rem;
        }
      }

`;



function Fullscreen(props) {
  return (
    <FullscreenWrap image={props.image} height={props.height} text={props.text}>
      {props.children}
    </FullscreenWrap>
  );
}

export default Fullscreen;

