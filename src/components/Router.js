import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import App from "../Task1/App";
import Home from "../Home";

function NavRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path='/'/>
                <Route path='/Task1/' element={<App />} />
            </Routes>
            <ul>
                <li>
                    <Link to={"/"}>Индекс</Link>
                </li>
                <li>
                    <Link to={"/Task1/"}>Задание 1</Link>
                </li>
            </ul>
        </Router>
    );
};

export default NavRouter;