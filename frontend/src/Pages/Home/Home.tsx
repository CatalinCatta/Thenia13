import {useEffect, useState} from "react";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import game1Template from '../../Images/gameTemplate.jpg';
import game2Template from '../../Images/gameTemplate.jpg';
import './home.css';
import AllUpdates from "../../Components/AllUpdates/AllUpdates";
import {CardActionArea} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {GameModel} from "../../Model/GameModel";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
    const [Games, SetGames] = useState<[GameModel]>();
    let navigate = useNavigate();
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };

    function goToGame(gameId : number){
        navigate(`/${gameId}`);
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

        {/*<Carousel>*/}
        {/*        <div>*/}
        {/*            <img src={game1Template} alt="1111111111111111111" />*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*            <img src={game2Template} alt="222222222222222222"  />*/}
        {/*        </div>*/}
        {/*</Carousel>*/}
        {/*<Slider {...settings}>*/}
        {/*    <div>*/}
                <CardActionArea onClick={() => goToGame(1)}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={game1Template}
                        alt="game1"
                    />
                </CardActionArea>
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <CardActionArea onClick={() => goToGame(2)}>*/}
        {/*            <CardMedia*/}
        {/*                component="img"*/}
        {/*                height="250"*/}
        {/*                image={game2Template}*/}
        {/*                alt="game2"*/}
        {/*            />*/}
        {/*        </CardActionArea>*/}
        {/*    </div>*/}
        {/*</Slider>*/}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                LATEST NEWS
            </Typography>
            <AllUpdates page={1}/>
        </CardContent>
    </Card>);
}