import React from "react";
import NavRouter from "./components/Router.js"

function Home() {
    return (
        <div>
            <p>Привет, это индекс страничка</p>
            <NavRouter/>    
        </div>
    );
}

export default Home;
