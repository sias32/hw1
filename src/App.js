import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Task1 from "./Task1/Task1";
import Task2 from "./Task2/Task2";

function Router() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path='/Task1' element={<Task1/>}/>
                    <Route path='/Task2' element={<Task2/>}/>
                    <Route path='*' element={<h1>Ошибка: 404</h1>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default Router;