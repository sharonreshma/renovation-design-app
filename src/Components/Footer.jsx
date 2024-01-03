import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


function Copyright(props) {
  return (
    <Typography variant="body2" color="rgb(255,255,255)" align="center" {...props}>
      {'Copyright © '}
      <Link color="rgb(255,255,255)" href="https://mui.com/">
        R&D
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const footers = [
    {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Customize',
      'Designing',
      'Furnitures',
      'Decors',
      'Renovation',
    ],
  },
  {
    title: 'Resources',
    description: ['Source', 'About', 'randd@gmail.com', 'sampleus@gmail.com'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      {/* Footer */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],backgroundColor: "black",opacity: 70
                }}
      >
        <Grid container spacing={4} justifyContent="space-evenly" marginLeft={5}>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="rgb(255,255,255)">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <div className="footer-wrapper">
        <div className="footer-section-one">
          
      
          <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
  
         </div>
        <Copyright sx={{ mt: 5 }} />

      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}