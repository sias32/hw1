import React from "react";
import '../main.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
} from "react-router-dom";
import App from "./Task1/App";


function NavRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/Task1/' element={<App />} />
            </Routes>
            <div>
                <Link to={"/Task1/"}>123</Link>
            </div>
        </Router>
    );
};

export default NavRouter;