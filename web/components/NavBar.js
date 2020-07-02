import React, { Component } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavbarWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 9;
  color: #fff;
  background: transparent;
  box-sizing: border-box;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 200px;
    color: #fff;
    margin: 0rem 4rem 1rem 2rem;

    @media (min-width: 700px) {
      display: flex;
      width: 300px;
      justify-content: left;
    }
  }
  nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 0rem 0.5rem 0rem;
    z-index: 9;

    @media (min-width: 700px) {
      justify-content: flex-start;
    }



    ul {
      display: flex;
      flex-direction: row;
      padding: 0;
      justify-content: center;
      margin: 0;
      width: 100%;

      @media (min-width: 700px) {
        justify-content: flex-end;
      }

      li {
        min-width: 100px;
        text-align: center;
        margin: 0rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: bold;

        a {
          font-weight: light;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1.5px;

          :hover {
            color: yelow;
          }
        }
      }
    }
  }
`;

function NavBar() {
  return (
    <NavbarWrapper>
      <nav>
         <div className="logo">
          <Link href="/">
            <img src="/logo.svg" width="180" />
          </Link>

          <ul>
            <li>
          <Link href="/blog">
          <a>Tips</a>
          </Link>
          </li>

          <li>
          <Link href="/">
          <a>Hjem</a>
          </Link>
          </li>

          </ul>
        </div> 
      </nav>
    </NavbarWrapper>
  );
}

export default NavBar;
