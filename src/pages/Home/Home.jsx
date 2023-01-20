import Logo from "../../components/Logo/Logo"
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import './Home.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Home(){
    const theme = createTheme();

    return (
    <>
    <ThemeProvider theme={theme}>
        <h1 className='head'>Sams <br/> StreetWear</h1>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        </Grid>
        </ThemeProvider>
    </>
    )
}