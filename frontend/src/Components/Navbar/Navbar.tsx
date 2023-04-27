import {
    MenuItem,
    Tooltip,
    Button,
    Avatar,
    Container,
    Menu,
    IconButton,
    Typography,
    Toolbar,
    Box,
    AppBar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState, MouseEvent} from "react";
import logo from "../../Images/logo.png";
import LogIn from "../Register/LogIn";
import SignUp from "../Register/SignUp";

const pages = ['Games', 'Contact', 'FAQ', 'About'];

export default function Navbar() {
    const token = sessionStorage.getItem('token');
    let userName = sessionStorage.getItem('userName');
    if (userName === null) {
        userName = "";
    }
    console.log(token)
    console.log(userName)

    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    const handleLoginModalOpen = () => {
        setLoginModalOpen(true);
    };

    const handleLoginModalClose = () => {
        setLoginModalOpen(false);
    };

    const handleSignupModalOpen = () => {
        setSignupModalOpen(true);
    };

    const handleSignupModalClose = () => {
        setSignupModalOpen(false);
    };
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar sx={{backgroundColor: "darkGreen"}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={logo} alt="logo" height="35px"/>
                            THENIA13
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={logo} alt="logo" height="35px"/>
                            THENIA13
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{flexGrow: 0}}>

                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    {token ? (<Avatar>@{userName.charAt(0)}</Avatar>) : (
                                        <Avatar src="/broken-image.jpg"/>)}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {token ? (
                                    <>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Profile</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Account</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </>
                                ) : (
                                    <>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center"
                                                        onClick={handleLoginModalOpen}>Login</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center"
                                                        onClick={handleSignupModalOpen}>SignUp</Typography>
                                        </MenuItem>
                                        <LogIn open={loginModalOpen} onClose={handleLoginModalClose}/>
                                        <SignUp open={signupModalOpen} onClose={handleSignupModalClose}/>
                                    </>
                                )}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
