import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Typography, CardContent, CardMedia} from "@mui/material";
import game1Template from "../../Images/gameTemplate1.jpg";
import game2Template from "../../Images/gameTemplate2.jpg";
import AllUpdates from "../../Components/AllUpdates/AllUpdates";
import {GameModel} from "../../Model/GameModel";


export default function GameById(){
    const {gameId} = useParams<{ gameId?: string }>();

    const [Game, SetGame] = useState<GameModel>();

    useEffect(() => {
        fetch(`http://localhost:8081/api/games/${gameId}`)
            .then((response) => response.json())
            .then((json) => {
                SetGame(json)
            })
            .catch((error) => console.log(error));
    }, [gameId]);

    if (!Game){
        return (<div>ERROR</div>);
    }
    document.title = Game.name;

    return (<Card id="mainCard">
            <CardMedia
                component="img"
                height="250"
                image={Game.id === 1? game1Template : game2Template}
                alt="game X"
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{marginLeft: 5, marginRight: 5}}>
                About {Game.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{marginLeft: 5, marginRight: 5}}>
                {Game.description}
            </Typography>
            <AllUpdates gameId={ parseInt(gameId || "", 10)}/>
        </CardContent>
    </Card>);
}