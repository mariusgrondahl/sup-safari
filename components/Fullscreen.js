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

  p {
    max-width: 980px;
    font-size: 1.2rem;
    color: #fff;
    /* text-shadow: 0px 0px 10px rgba(45,45,45,0.79); */
  }

  a {
    color: #fff;
    text-decoration: none;
    &:active {
      color: yellow;
    }
  }

  ul {
    padding: 0rem 2rem;
    font-size: 2rem;
    line-height: 2.4rem;
    li {
    }
  }

  @media only screen and (min-width: 700px) {
    background-position: center center;
    height: 70vh;

    ul {
      display: flex;
      li {
        margin: 2rem;
      }
    }

  }
`;

// setting deafult image
Fullscreen.defaultProps = {
  image: "/img/supsafari-hvaler.jpg"
};

function Fullscreen(props) {
  return (
    <FullscreenWrap image={props.image} height={props.height} text={props.text}>
      {props.children}
    </FullscreenWrap>
  );
}

export default Fullscreen;

