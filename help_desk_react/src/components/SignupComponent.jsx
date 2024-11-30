// import { Box, Button, TextField } from '@mui/material'
// import React from 'react'

// const SignupComponent = () => {
//     return (

//         <Box>


//             <br></br>

//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Name"

//                 />

//             </div>

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

//                 <br></br>

//                 <div>
//                     <TextField
//                         required
//                         id="outlined-required"
//                         label="PhoneNo"

//                     />
//                 </div>

//                 <br></br>
//                 <Button color="inherit" style={{ color: 'black', background: 'skyblue' }}>Register</Button>

//             </div>
//         </Box>



//     )
// }

// export default SignupComponent


// import { Box, Button, TextField } from '@mui/material';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupComponent = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneNo, setPhoneNo] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleRegister = async () => {
//         try {
//             const response = await axios.post('https://localhost:7228/api/Task/register', {

//                 name: name,
//                 password: password
//             });
//             // Assuming the API returns a status code of 200 on successful registration
//             if (response.status === 200) {
//                 navigate('/login'); // Navigate to home page or a success page on successful registration
//             }
//         } catch (err) {
//             setError('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <Box>
//             <br />
//             <div>
//                 <TextField
//                     required
//                     id="outlined-required"
//                     label="Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//             </div>
//             <br />
//             <div>
//                 {/* <TextField
//                     required
//                     id="outlined-required"
//                     label="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 /> */}
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
//                 <br />
//                 <div>
//                     {/* <TextField
//                         required
//                         id="outlined-required"
//                         label="PhoneNo"
//                         value={phoneNo}
//                         onChange={(e) => setPhoneNo(e.target.value)}
//                     /> */}
//                 </div>
//                 <br />
//                 {error && <p style={{ color: 'red' }}>{error}</p>}
//                 <Button
//                     color="inherit"
//                     style={{ color: 'black', background: 'skyblue' }}
//                     onClick={handleRegister}
//                 >
//                     Register
//                 </Button>
//             </div>
//         </Box>
//     );
// }

// export default SignupComponent;
//=========================================================================


import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupComponent = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [post_Id, setPost_Id] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://localhost:7228/api/Task/register', {
                name: name,
                password: password,
                post_Id: post_Id
            });
            // Assuming the API returns a status code of 200 on successful registration
            if (response.status === 200) {
                navigate('/login'); // Navigate to login page on successful registration
            }
        } catch (err) {
            setError('Registration failed. Please try again.');
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
            <Typography variant="h4" component="h1" gutterBottom>
                Registration
            </Typography>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <br />
                <TextField
                    required
                    id="outlined-required"
                    label="PostID "
                    value={post_Id}
                    onChange={(e) => setPost_Id(e.target.value)}
                />



            </div>
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Button
                color="inherit"
                style={{ color: 'black', background: 'skyblue' }}
                onClick={handleRegister}
            >
                Register
            </Button>
        </Box>
    );
}

export default SignupComponent;
