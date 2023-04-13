import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {CardActionArea} from "@mui/material";

export default function Navbar(){

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx ={{ backgroundColor: "darkGreen" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <CardActionArea href="/">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home
                    </Typography>
                    </CardActionArea>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
