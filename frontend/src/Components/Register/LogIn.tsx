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
    const [data, setData] = useState([]);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // @ts-ignore
    const handleLogin = (event) => {
        event.preventDefault()
        fetch('http://localhost:8081/api/accounts/logIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: username, password: password})
        })
            .then(r => r.json())
            .then(d => setData(d))
            .catch(error => console.error(error));

        // console.log(JSON.stringify({email: username, password: password}))
        if (data.length > 0) {
            // console.log(data[1]);
            // window.location.reload();
            sessionStorage.setItem('token', data[0])
            sessionStorage.setItem('userName', "test");
            onClose();
        }
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
                onSubmit={handleLogin}
            >
                <Typography className="title" variant="h3">Log In</Typography>
                <div className="input">
                    <TextField required type='email' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="E-mail" variant="outlined" value={username}
                               onChange={handleUsernameChange}/>
                </div>
                <div className="input">
                    <TextField required type="password" InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleTextarea" label="Password" variant="outlined" value={password}
                               onChange={handlePasswordChange}/>
                </div>
                <button className="register" type={"submit"}><span className="text">Log In</span></button>
            </Box>
        </Modal>
    );
};

export default LogIn;