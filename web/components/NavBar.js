import React, { Component } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const NavbarWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  z-index: 9;
  background: tomato;
  color: #2d2d2d;
  box-sizing: border-box;

  .logo {
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #fff;
    width: 150px;
    margin: .5rem .5rem .5rem .5rem;

    @media (min-width: 700px) {
      display: flex;
      width: 210px;
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
      justify-content: flex-end;
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
        font-size: 1.4rem;
        font-weight: bold;

        @media (min-width: 700px) {
          font-size: 1.8rem;
      }

        a {
          font-weight: normal;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1.2px;
          text-decoration: underline;

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
            <img className="logo" loading="lazy" width="120px" src="/logo-transparent-white.svg"  alt="sup safari logo" />
          </Link>
        </div>
          <ul>  
          <li>
          <Link href="/surfetips">
            <a>Tips</a>
          </Link>
          </li>

          <li>
          <Link href="/surfesjappa">
            <a>Sjappa</a>
          </Link>
          </li>

          </ul>
      </nav>
    </NavbarWrapper>
  );
}

export default NavBar;
