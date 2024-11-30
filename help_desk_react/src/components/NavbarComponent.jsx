import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (


        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link to={'/login'}><Button color="inherit" style={{ color: "white" }}>Login</Button></Link>
                    <Link to={'/signup'}><Button color="inherit" style={{ color: "white" }}>SignUp</Button></Link>
                    {/* <Link to={'/home'}><Button color="inherit" style={{ color: "white" }}>Home</Button></Link> */}

                    <Link to={'/logout'}><Button color="inherit" style={{ color: "white" }}>Logout</Button></Link>

                </Toolbar>
            </AppBar>

            <header> <h1 className="welcome-header">Welcome to the HelpDesk Module!</h1>
                <p className="welcome-text">Your ultimate tool for managing tasks efficiently.</p> </header>
        </Box>
    );
}

export default NavbarComponent; // Ensure this line exists
