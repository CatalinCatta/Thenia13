import {useEffect, useState} from "react";
import React from 'react';
import {Box, CardActionArea} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {UpdateModel} from "../../Model/UpdateModel";


export default function AllUpdates({page = 0, gameId = 0}: { page?: number, gameId?: number }) {
    const [Updates, SetUpdates] = useState<[UpdateModel]>();
    let url = page === 0 ? `http://localhost:8081/api/updates/game/${gameId}` : `http://localhost:8081/api/updates/page/${page}`;


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => { SetUpdates(json) })
            .catch((error) => console.log(error));
    }, [page]);
    if (!Updates) {
        return (<div>ERROR</div>);
    }
    return <>{Updates.map((update : UpdateModel) => <Card key={update.id}
                                            sx={{backgroundColor: '#4a4a42a3', display: 'flex', margin: 5}}
                                            style={{border: "2px solid black"}}>
        <CardActionArea>
            <CardContent>
                <Typography component="div" variant="h5">
                    {update.name} V{update.version}
                </Typography>
            </CardContent>
            <CardContent sx={{padding: 0}}>
                <Card>
                    <Box sx={{display: 'flex', flexDirection: 'inherit', backgroundColor: '#4a4a42a3', height: 100, paddingBottom: 2, paddingLeft: 1}}>
                        <CardMedia
                            component="img"
                            sx={{width: 151}}
                            src={update.thumbnail}
                            alt={`update ${update.name}`}
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
                                    {update.description}
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