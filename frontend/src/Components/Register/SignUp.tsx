import React, {useState} from "react";
import {Box, Modal, TextField, Typography} from "@mui/material";

export interface SignupModalProps {
    open: boolean;
    onClose: () => void;
}

const SignUp = ({open, onClose}: SignupModalProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setData] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };


    // @ts-ignore
    const handleSignup = (event) => {
        event.preventDefault()
        fetch('http://localhost:8081/api/accounts/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"email": username, "password": password})
        })
            .then(r => r.text())
            .then(d => setData(d))
            .catch(error => console.error(error));
        if (data !== "") {
            // window.location.reload();
            sessionStorage.setItem('token', data)
            sessionStorage.setItem('userName', firstName);
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
                onSubmit={handleSignup}>
                <Typography className="title" variant="h3">Sign Up</Typography>
                <div className="input">
                    <TextField required type='text' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="First Name" variant="outlined" value={firstName}
                               onChange={handleFirstNameChange}/>
                </div>
                <div className="input">
                    <TextField required type='text' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="Last Name" variant="outlined" value={lastName}
                               onChange={handleLastNameChange}/>
                </div>
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
                <button className="register" type={"submit"}><span className="text">Sign Up</span></button>
            </Box>
        </Modal>
    );
};

export default SignUp;