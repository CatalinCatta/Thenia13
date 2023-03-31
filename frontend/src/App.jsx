import './App.css';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import GameById from "./Pages/Game/Game.tsx";
import Home from "./Pages/Home/Home";

function App() {
    return (
        // <div>
         <div className="layout">
            <div>
                <Routes>
                    <Route path="/:gameId" element={<GameById />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
