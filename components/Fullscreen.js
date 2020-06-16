import React from "react";
import styled from "@emotion/styled";

const FullscreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: center;
  background: url(${props => props.image});
  background-size: cover;
  background-position: bottom center;
  color: ${props => props.text};
  width: 100%;
  box-sizing: border-box;
  height: ${props => props.height};
  padding: 6rem 4rem;



  button{
    max-width: 200px;
  }

  h1 {
    text-shadow: 0px 0px 10px rgba(45, 45, 45, 0.3);
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 3.9rem;
    margin: 0rem;
    padding: 0rem;
  }
  h1 {
    font-size: 4rem;
  }

  p {
    max-width: 980px;
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

    ul {
      display: flex;
      li {
        margin: 2rem;
      }
    }

    h1 {
      font-size: 5rem;
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

