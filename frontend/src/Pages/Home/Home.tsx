import {useEffect, useState} from "react";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import gameTemplate from '../../Images/gameTemplate.jpg';
import './home.css';
import AllUpdates from "../../Components/AllUpdates/AllUpdates";
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";

interface GameModel {
    Name: string;
}


export default function Home() {
    const [Games, SetGames] = useState<[GameModel]>([{Name: ""}]);
    let navigate = useNavigate();

    function goToGame(gameId : number){
        navigate(`/${gameId}`);
    }

    useEffect(() => {
        fetch(`http://localhost:8081/games/all`)
            .then((response) => response.json())
            .then((json) => SetGames(json))
            .catch((error) => console.log(error));
    }, []);

    if (!Games) {
        return (<div>ERROR</div>);
    }
    document.title = "Thenia13";

    console.log(Games)

    return (<Card id="mainCard">
        <CardActionArea onClick={() => goToGame(1)}>
            <CardMedia
                component="img"
                height="250"
                image={gameTemplate}
                alt="game X"
            />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                LATEST NEWS
            </Typography>
            <AllUpdates page={1}/>
        </CardContent>
    </Card>);
}