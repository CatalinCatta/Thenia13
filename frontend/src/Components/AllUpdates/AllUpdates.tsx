import {useEffect, useState} from "react";
import React from 'react';
import {Box, CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

interface UpdateModel {
    Id: number;
    Name: string;
    Description: string;
    GameId: number;
    Thumbnail: string;
    Version : string
}

export default function AllUpdates({page = 0, gameId = 0}: { page?: number, gameId?: number }) {
    const [Updates, SetUpdates] = useState<[UpdateModel]>([{Id: 0, Name: "", Description: "", GameId: gameId, Thumbnail: "", Version: ""}]);
    let url = page === 0 ? `http://localhost:8081/updates/game/${gameId}` : `http://localhost:8081/updates/all/${page}`;


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => SetUpdates(json))
            .catch((error) => console.log(error));
    }, [page]);

    if (!Updates) {
        return (<div>ERROR</div>);
    }

    return <>{Updates.map((update) => <Card key={update.Id}
                                            sx={{backgroundColor: '#4a4a42a3', display: 'flex', margin: 5}}
                                            style={{border: "2px solid black"}}>
        <CardActionArea>
            <CardContent>
                <Typography component="div" variant="h5">
                    {update.Name} - {update.GameId === 1? "Galactic Odyssey" : "Shadow Realms"} V{update.Version}
                </Typography>
            </CardContent>
            <CardContent sx={{padding: 0}}>
                <Card>
                    <Box sx={{display: 'flex', flexDirection: 'inherit', backgroundColor: '#4a4a42a3', height: 100, paddingBottom: 2, paddingLeft: 1}}>
                        <CardMedia
                            component="img"
                            sx={{width: 151}}
                            src={update.Thumbnail}
                            alt={`update ${update.Name}`}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'inherit'}}>
                            <CardContent>
                                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "3",
                                    WebkitBoxOrient: "vertical",
                                }}>
                                    {update.Description}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Box>
                </Card>
            </CardContent>
        </CardActionArea>
    </Card>)}
    </>;
}