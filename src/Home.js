import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
    display: block;
    text-align: center;

    ul {
        margin: 14px 0px;
        padding: 0px;
    }
    li {
        list-style: none;
    }
`;

function Home() {
    return (
        <Nav>
            <p>Привет, это Домашняя  страничка</p>
            <ul>
                <li>
                    <a href="/">Домашняя</a>
                </li>
                <li>
                    <a href="/Task1/">Задание 1</a>
                </li>
                <li>
                    <a href="/Task2/">Задание 2</a>
                </li>
            </ul>
        </Nav>
    );
}

export default Home;
