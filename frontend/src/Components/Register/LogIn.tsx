import React, {useState} from "react";
import {Box, Modal, TextField, Typography} from "@mui/material";
import "./register.css";

export interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LogIn = ({open, onClose}: LoginModalProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Handle login logic
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{display: "flex"}}
        >
            <Box
                component="form"
                sx={{
                    mt: 3,
                    '& .MuiTextField-root': {my: 1, width: '100%'},
                }}
                noValidate
                autoComplete="off"
                id="modalBox"
            >
                <Typography className="title" variant="h3">Log In</Typography>
                <div className="input">
                    <TextField required type='email' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="E-mail" variant="outlined"/>
                </div>
                <div className="input">
                    <TextField required type="password" InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleTextarea" label="Password" variant="outlined"/>
                </div>
                <button className="register"><span className="text">Log In</span></button>
            </Box>
        </Modal>
    );
};

export default LogIn;