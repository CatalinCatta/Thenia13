import {useEffect, useState} from "react";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import game1Template from '../../Images/gameTemplate1.jpg';
import game2Template from '../../Images/gameTemplate2.jpg';
import './home.css';
import AllUpdates from "../../Components/AllUpdates/AllUpdates";
import {CardActionArea, Pagination} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {GameModel} from "../../Model/GameModel";
import Carousel from 'react-material-ui-carousel';

export default function Home() {
    const [Games, SetGames] = useState<[GameModel]>();
    let navigate = useNavigate();

    function goToGame(gameId : number){
        navigate(`/${gameId}`);
    }

    const [currentPage, setCurrentPage] = useState(1);

    function handlePageChange(event: React.ChangeEvent<unknown>, newPage: number) {
        setCurrentPage(newPage);
    }
    useEffect(() => {
        fetch(`http://localhost:8081/api/games`)
            .then((response) => response.json())
            .then((json) => {
                SetGames(json)
            })
            .catch((error) => console.log(error));
    }, []);

    if (!Games) {
        return (<div>ERROR</div>);
    }
    document.title = "Thenia13";

    return (<Card id="mainCard">

        <Carousel>
            <CardActionArea onClick={() => goToGame(1)}>
                <CardMedia
                    component="img"
                    height="250"
                    image={game1Template}
                    alt="game1"
                />
            </CardActionArea>
            <CardActionArea onClick={() => goToGame(2)}>
                <CardMedia
                    component="img"
                    height="250"
                    image={game2Template}
                    alt="game1"
                />
            </CardActionArea>
        </Carousel>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                LATEST NEWS
            </Typography>
            <AllUpdates page={currentPage}/>
            <Pagination count={2} page={currentPage} onChange={handlePageChange} />
        </CardContent>
    </Card>);
}