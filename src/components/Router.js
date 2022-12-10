import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Home from "../Home";


function NavRouter() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Task1/' element={<Task1 />} />
                <Route path='/Task2/' element={<Task2/>}/>
            </Routes>
        </Router>
    );
};

export default NavRouter;