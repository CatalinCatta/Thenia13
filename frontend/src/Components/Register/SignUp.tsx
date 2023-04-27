import React, {useState} from "react";
import {Box, Modal, TextField, Typography} from "@mui/material";

export interface SignupModalProps {
    open: boolean;
    onClose: () => void;
}

const SignUp = ({open, onClose}: SignupModalProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSignup = () => {
        // Handle signup logic
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
                <Typography className="title" variant="h3">Sign Up</Typography>
                <div className="input">
                    <TextField required type='text' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="First Name" variant="outlined"/>
                </div>
                <div className="input">
                    <TextField required type='text' InputLabelProps={{
                        style: {color: 'forestGreen'},
                    }} id="exampleInput" label="Last Name" variant="outlined"/>
                </div>
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
                <button className="register"><span className="text">Sign Up</span></button>
            </Box>
        </Modal>
    );
};

export default SignUp;