// Rewrite the SignUpForm as a function component
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'

import * as React from 'react';
import {useNavigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://letmechek.github.io/portfolio/" target='_blank'>
        Portfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpForm({ setUser }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
                name: '',
                email: '',
                password: '',
                confirm: '',
                error: ''
            })
            // const disable = formData.password !== formData.confirm;
        
            function handleChange(evt) {
                setFormData({
                    ...formData,
                    [evt.target.name]: evt.target.value,
                    error: ''
                })
            }
        
            async function handleSubmit(evt) {
                evt.preventDefault()
                try {
                    const formDataCopy = {...formData}
                    delete formDataCopy.error
                    delete formDataCopy.confirm
                    const user = await signUp(formDataCopy)
                    setUser(user)
                } catch {
                    setFormData({
                        ...formData,
                        error: 'Sign Up Failed - Try Again'
                    })
                }
            }
        
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                  value={formData.name}
                onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.name}
                onChange={handleChange}
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={()=> navigate('/')} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}



// export default function SignUpForm({ setUser }) {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     })
//     const disable = formData.password !== formData.confirm;

//     function handleChange(evt) {
//         setFormData({
//             ...formData,
//             [evt.target.name]: evt.target.value,
//             error: ''
//         })
//     }

//     async function handleSubmit(evt) {
//         evt.preventDefault()
//         try {
//             const formDataCopy = {...formData}
//             delete formDataCopy.error
//             delete formDataCopy.confirm
//             const user = await signUp(formDataCopy)
//             setUser(user)
//         } catch {
//             setFormData({
//                 ...formData,
//                 error: 'Sign Up Failed - Try Again'
//             })
//         }
//     }

//     return(
//         <div>
//             <div className="form-container">
//               <form autoComplete="off" onSubmit={handleSubmit}>
//                 <label>Name</label>
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 <label>Email</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 <label>Confirm</label>
//                 <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
//                 <button type="submit" disabled={disable}>SIGN UP</button>
//               </form>
//             </div>
//             <p className="error-message">&nbsp;{formData.error}</p>
//           </div>
//     )
// }
