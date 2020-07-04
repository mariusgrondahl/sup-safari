import React from "react";
import { Global, css } from "@emotion/core";

function GlobalCss(props) {
    return (
        <Global
          styles={css`
          * {
            box-sizing: border-box;
            }

    body{
        padding: 0;
        margin: 0;
        font-size: 16px;
        font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
        background: #f1f1f1;
        color: #2d2d2d;
      }

      html {
        font-size: 62.5%;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        scroll-behavior: smooth;

    }

    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@1,700&family=Noto+Sans+JP&display=swap');     

      
    a {
        color: #2d2d2d;
    }
    
    a:hover{
        color: darkturquoise;
    }
      
    li {
        list-style: none;
    }

      label{
        color: #2d2d2d;
        font-weight: bold;
        font-size: 1.4rem;
      }

      input{
        border-radius: 3px;
        width: 100%;
        padding: .8rem;
        color: #2d2d2d;
        margin: .2rem 0rem;
        outline: none;
        border: none;
        box-sizing: border-box;
      }

      textarea {
        border-radius: 3px;
        width: 100%;
        padding: .5rem;
        color: #2d2d2d;
        margin: .2rem 0rem;
        outline: none;
        border: none;
        box-sizing: border-box;
      }

      button{
        background: tomato;
        outline: none;
        border-radius: 3px;
        width: 100%;
        padding: .7rem;
        margin: 0 auto;
        color: #fff;
        border: none;
        text-transform: uppercase;
        font-style: italic;
        box-sizing: border-box;
      }
      

      .logo{
        max-width: 550px;
        margin-bottom: 2.5rem;
      }
      
    `}
    />
  );
}

export default GlobalCss;
