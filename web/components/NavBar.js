import React, { Component } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavbarWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
  background: tomato;
  color: #2d2d2d;
  box-sizing: border-box;

  .logo {
    display: none;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #fff;
    width: 130px;
    margin: 1rem 1rem 1rem 2rem;

    @media (min-width: 700px) {
      display: flex;
      width: 190px;
      justify-content: left;
    }
  }
  nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    padding: .5rem .5rem 0.5rem .5rem;
    z-index: 9;

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
        text-align: center;
        margin: 0rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
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
            <img className="logo" loading="lazy" width="120px" src="/logo-red.svg"  alt="sup safari logo" />
          </Link>
          </div>
          <ul>  
          <li>
          <Link href="/">
          <a>Hjem</a>
          </Link>
          </li>

          <li>
          <Link href="/blog">
            <a>SUP-blogggen</a>
          </Link>
          </li>

          </ul>
      </nav>
    </NavbarWrapper>
  );
}

export default NavBar;
