import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Chefo</h4>
        <h1>
          Welcome to <span>SLEEK RIDE DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fff;
  .title {
    h1 {
      span {
        margin-left: 0.5em;
        color: #ffc107;
        letter-spacing: 0.2em;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .search {
    background-color: gray;
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em 8em 1em 1em;
    border-radius: 1em;
    svg {
      color: #ffc107;
    }
    input {
      border: none;
      background-color: transparent;
      color: #ffc107;
      letter-spacing: 0.3em;
      font-family: "Permanent Marker", cursive;
      &:: placeholder {
        color: #ffc107;
      }
      &: focus {
        outline: none;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1em 0;
        }
      }
    }
  }
`;
export default Navbar;
