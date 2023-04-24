import React, {useEffect, useState} from "react";
import {Card, Typography, CardContent, CardMedia, Box, CardActionArea} from "@mui/material";
import {UpdateModel} from "../../Model/UpdateModel";
import "./allUpdate.css";

export default function AllUpdates({page = 0, gameId = 0}: { page?: number, gameId?: number }) {
    const [Updates, SetUpdates] = useState<[UpdateModel]>();
    let url = page === 0 ? `http://localhost:8081/api/updates/game/${gameId}` : `http://localhost:8081/api/updates/page/${page}`;


    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                SetUpdates(json)
            })
            .catch((error) => console.log(error));
    }, [page]);
    if (!Updates) {
        return (<div>ERROR</div>);
    }
    return <>{Updates.map((update: UpdateModel) => <Card key={update.id} id="patchNote">
        <CardActionArea>
            <CardContent>
                <Typography component="div" variant="h5" id="title">
                    {update.name} V{update.version}
                </Typography>
            </CardContent>
            <CardContent sx={{padding: 0}}>
                <Card>
                    <Box sx={{display: 'flex', flexDirection: 'inherit', height: 100, padding: 2}}>
                        <CardMedia
                            component="img"
                            sx={{width: 150}}
                            src={update.thumbnail}
                            alt={`update ${update.name}`}
                        />
                        <Box sx={{display: 'flex', flexDirection: 'inherit'}}>
                            <CardContent sx={{paddingTop: 0}}>
                                <Typography variant="h6" color="text.primary" component="div" sx={{
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