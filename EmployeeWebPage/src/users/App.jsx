import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import LogoutIcon from '@mui/icons-material/Logout';
import PhoneIcon from '@mui/icons-material/Phone';
import Tooltip from '@mui/material/Tooltip';
import Login from '../pages/login';

function App() {
  const [loginopen, setloginOpen] = useState(false);
  const handleLoginOpen = () => { setloginOpen(true); };
  const handleLoginClose = () => { setloginOpen(false); };

  const ref = useRef(null);
  const handleClick = () => { ref.current?.scrollIntoView({ behavior: 'smooth' }); };

  const handleExplore = () => {
    const user = sessionStorage.getItem('username')
    if (user != null) {
      nav('/employee')
    }
    else {
      alert("Please Login to Explore")
    }
  }

  const handlelogout = () => {
    alert("Logged Out Successfully");
    sessionStorage.removeItem('username');
    window.location.reload()
  }
  const nav = useNavigate()

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
                <Tooltip title='Contact'>
                <IconButton onClick={handleClick}><ContactPageIcon style={{ fontSize: '30px' }} /></IconButton>
                </Tooltip>
              </Grid>
              {(sessionStorage.getItem('username') == null) ? (
                <>
                  <Grid item>
                    <Tooltip title='Login'>
                    <IconButton onClick={handleLoginOpen}><AccountCircleIcon style={{ fontSize: '30px' }} /></IconButton>
                    </Tooltip>
                  </Grid>
                </>
              ) : ''}
              {(sessionStorage.getItem('username') != null) ? (
                <>
                  <Grid item>
                    <Tooltip title='Logout'>
                    <IconButton onClick={() => handlelogout()}><LogoutIcon style={{ fontSize: '30px' }} /></IconButton>
                    </Tooltip>
                  </Grid>
                </>
              ) : ''}
            </Grid>
          </Grid>
          <Grid item>
            <Modal
              open={loginopen}
              onClose={handleLoginClose}
              aria-labelledby="child-modal-title"
              aria-describedby="child-modal-description"
            >
              <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: 300, height: 'auto', bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4,
              }}>
                <div className='loginHeader'>
                  <h2>LOGIN</h2>
                  <Tooltip title='Close'>
                  <IconButton onClick={handleLoginClose} style={{ color: 'red' }}><CancelIcon /></IconButton>
                  </Tooltip>
                </div>
                <hr />
                <Login />
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
              <Grid container className='employee' style={{textAlign:'center'}}>
                <Grid item xs={12} >
                  <IconButton><PeopleAltIcon style={{ fontSize: '30px' }} /><h3>Employee Details</h3></IconButton>
                </Grid>
                <Grid item xs={12} >
                  <Button variant="contained" onClick={() => handleExplore()}>Explore</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} ref={ref} className='bottom'>
          <Grid container style={{textAlign:'center'}}>
            <Grid item xs={12}>
              <IconButton style={{ color: 'white' }}><LocationOnIcon />L&T Technology Services,Hebbal, Mysuru, Karnataka 570018</IconButton>
            </Grid>
            <Grid item xs={12}>
              <IconButton style={{ color: 'white' }}><EmailIcon />Abhijeet.Behera@ltts.com</IconButton>
            </Grid>
            <Grid item xs={12}> 
              <IconButton style={{ color: 'white' }}><PhoneIcon  /> +91-7539024266</IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
