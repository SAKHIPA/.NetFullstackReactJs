// import { Box, Button, TextField } from '@mui/material'
// import React from 'react'

// const LoginComponent = () => {
//     return (
//         <Box>
//             <br></br>

//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Email"

//                 />

//                 <div>

//                     <br></br>
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"


//                     />
//                 </div>
//             </div>
//             <br></br>
//             <Button
//                 color="inherit" style={{ color: 'black', background: 'skyblue' }}>Login</Button>

//         </Box>

//     )
// }

// export default LoginComponent
//======================================================================================================================
//================working
// import { Box, Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LoginComponent = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/login', {
//                 name: username,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful login
//             if (response.status === 200) {
//                 // navigate('/home'); // Navigate to home page on success

//                 const role = response.data.role;
//                 if (role === 'Admin') { navigate('/home'); }
//                 else if (role === 'Employee') { navigate('/addtask'); }
//                 else { navigate('/home'); }
//             }
//         } catch (err) {
//             setError('Invalid username or password');
//         }
//     };

//     return (
//         <Box>
//             <br />
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <div>
//                     <br />
//                     <TextField
//                         id="outlined-password-input"
//                         label="Password"
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//             </div>
//             <br />
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <Button
//                 color="inherit"
//                 style={{ color: 'black', background: 'skyblue' }}
//                 onClick={handleLogin}
//             >
//                 Login
//             </Button>
//         </Box>
//     );
// };

// export default LoginComponent;

//======================================

import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7228/api/Task/login', {
                name: username,
                password: password
            });
            // Assuming the API returns a status code of 200 on successful login
            if (response.status === 200) {
                const role = response.data.role;
                if (role === 'Admin') { navigate('/home'); }
                else if (role === 'Employee') { navigate('/addtask'); }
                else { navigate('/updateassignee'); }
            }
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                textAlign: 'center',
            }}


        >

            <Typography variant="h4" component="h1" gutterBottom> Login </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div>
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleLogin}
            >
                Login
            </Button>
        </Box>
    );
};

export default LoginComponent;
