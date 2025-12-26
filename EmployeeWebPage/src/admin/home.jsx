import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, Grid, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function Home() {
  const [infoopen, setInfoOpen] = useState(false);
  const handleInfoOpen = () => { setInfoOpen(true); };
  const handleInfoClose = () => { setInfoOpen(false); };

  const navigate = useNavigate();

  const handlelogOut = () => {
    alert("Logged Out Successfully");
    navigate('/');
    sessionStorage.removeItem('username')
  }

  const ref = useRef(null);
  const handleClick = () => { ref.current?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 2 }}>
      <Grid item xs={12}>
        <Grid container className='top-right' justifyContent='space-between'>
          <Grid item>
            <div className='name'><img src="AB.jpg" height='80px' width='80px' /></div>
          </Grid>
          <Grid item>
            <Grid container className='top-left'>
              <Grid item>
                <Link to="/">
                  <Tooltip title='Home'>
                  <IconButton ><HomeIcon style={{ fontSize: '30px' }} /></IconButton>
                  </Tooltip>
                </Link>
              </Grid>
              <Grid item>
                <IconButton><PeopleAltIcon style={{ fontSize: '30px' }} /></IconButton>
              </Grid>
              <Grid item>
                <Tooltip  title='Contact'>
                <IconButton onClick={handleClick}><ContactPageIcon style={{ fontSize: '30px' }} /></IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Account Info'>
                <IconButton onClick={handleInfoOpen}><AccountCircleIcon style={{ fontSize: '30px' }} /></IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Modal
              open={infoopen}
              onClose={handleInfoClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{
                position: 'absolute', top: '25%', left: '83.5%', transform: 'translate(-50%, -50%)',
                width: 320, height: 100, bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4,
              }}>
                <h2>Hello (^_^)ﾉ  {sessionStorage.getItem('username')}</h2>
                <Button onClick={handlelogOut} variant='contained'>LOGOUT</Button>
              </Box>
            </Modal>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <img src="banner.jpg" width="1286" height="270" />
        </Grid>

        <Grid item xs={12}>
          <Grid container className='position'>
            <Grid item xs={6}>
              <img src="banner3.png" width="700" height="250" />
            </Grid>

            <Grid item xs={5}>
              <Grid container className='employee' style={{ textAlign: 'center' }}>
                <Grid item xs={12}>
                  <IconButton><PeopleAltIcon style={{ fontSize: '30px' }} /><h3>Employee Details</h3></IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/explore"><Button variant="contained">Explore</Button></Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} ref={ref} className='bottom'>
          <Grid container style={{ textAlign: 'center' }}>
            <Grid item xs={12}>
              <IconButton style={{ color: 'white' }}><LocationOnIcon />L&T Technology Services,Hebbal, Mysuru, Karnataka 570018</IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton style={{ color: 'white' }}><EmailIcon />Abhijeet.Behera@ltts.com</IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton style={{ color: 'white' }}><PhoneIcon /> +91-7539024266</IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home;
