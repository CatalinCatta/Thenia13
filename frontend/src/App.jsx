import {Route, Routes} from "react-router-dom";
import React from 'react';
import GameById from "./Pages/Game/Game.tsx";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import ParticlesComponent from './Components/Particles';

export default function App() {
    return (<div style={{paddingTop: "64px"}}>
        <header className="App-header">
            <ParticlesComponent id="tsparticles"/>
        </header>
        <Navbar/>
        <Routes>
            <Route path="/:gameId" element={<GameById/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>);
}
