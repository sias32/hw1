import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "./main.css";

const Nav = styled.div`
    display: block;
    text-align: center;
    ul {
        margin: 14px 0px;
        padding: 0px;
        border: 1px solid white;
    }
    li {
        margin: 0.4em;
        list-style: none;
        display: inline-block;
    }
    a:link,
    a:visited,
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
        color: black;
    }
    a {
        background-color: #918edd;
        border-style: solid;
        border-radius: 5px;
        padding: 0.1em 0.2em;
    }
    p {
        background-color: #161fbe;
        margin-top: 0;
        padding: 5px;
        color: white;
    }
`;

function Home() {
  return (
    <Nav>
       <p>Привет, это Домашняя  страничка</p>
            <ul>
                <li>
                    <Link to="/">Домашняя</Link>
                </li>
                <li>
                    <Link to="/Task1/">Задание 1</Link>
                </li>
                <li>
                    <Link to="/Task2/">Задание 2</Link>
                </li>
            </ul>
    </Nav>
  );
}

export default Home;
