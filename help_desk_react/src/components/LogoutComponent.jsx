import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const LogoutComponent = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any stored authentication tokens or user information
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');

        // Redirect to the login page
        navigate('/login');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        handleLogout();
        handleClose();
    };

    return (
        <>
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleClickOpen}
            >
                Logout
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>{"Do you want to log out?"}</DialogTitle>
                <DialogContent>
                    {/* You can add more content here if needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LogoutComponent;
