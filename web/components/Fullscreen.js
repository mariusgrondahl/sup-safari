import React from "react";
import styled from "@emotion/styled";

const FullscreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: url(${props => props.image});
  background-position: center center;
  background-size: cover;
  color: ${props => props.text};
  padding-bottom: 0rem;
  width: 100%;
  box-sizing: border-box;
  height: ${props => props.height};


  .emphazize{
      color: PALETURQUOISE;
  }

  .yellow{
      color: yellow;
  }

  .byline{
    margin-top: 3rem;
  }
  h1{
        font-size: 5.5rem;
        line-height: 6rem;
        text-align: center;
        margin: 0rem 2rem;
        font-family: 'Barlow', BlinkMacSystemFont, Avenir Next, Avenir;
        color: white;
        text-shadow: 1px 1px 1px #000;

        @media (min-width: 700px) {
          font-size: 10rem;
          line-height: 10rem;
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

