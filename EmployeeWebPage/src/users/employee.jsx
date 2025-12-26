import React, { useEffect, useState } from 'react';
import { Grid, Tooltip } from '@mui/material';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import HomeIcon from '@mui/icons-material/Home';
import { getUsers } from '../flux/actions';
import Store from '../flux/store';

const Employee = () => {
  const [users, setUsers] = useState(Store.getUsers);

  useEffect(() => {
    Store.on("change", updateUsers);
    getUsers();
    return () => {
      Store.removeListener("change", updateUsers);
    };
  }, []);

  const updateUsers = () => {
    setUsers(Store.getAll());
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Link to="/">
              <Tooltip title='Back'>
              <IconButton style={{ backgroundColor: '#007FFF' }}>
                <KeyboardBackspaceIcon style={{ fontSize: '25px' }} />
              </IconButton>
              </Tooltip>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/">
              <Tooltip title='Home'>
              <IconButton style={{ marginRight: '550px', backgroundColor: '#007FFF' }}>
                <HomeIcon style={{ fontSize: '25px' }} />
              </IconButton>
              </Tooltip>
            </Link>
          </Grid>
          <Grid item>
            <h2>Hello {sessionStorage.getItem('username')}</h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Card sx={{ width: 700, display: 'flex', flexDirection: 'column' }}>
          {Store.users.map((item) => (
            <Card sx={{ maxWidth: 1000, display: 'flex', flexDirection: 'row', marginTop: '20px', backgroundColor: '#8878c3' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                <Typography gutterBottom variant="h7" color="text.secondary">DATE OF BIRTH: {item.birthday}</Typography>
                <Typography gutterBottom variant="h7" color="text.secondary">PHONE NUMBER: {item.phonenumber}</Typography>
                <Typography gutterBottom variant="h7" color="text.secondary">ADDRESS: {item.address}</Typography>
              </CardContent>
            </Card>
          ))}
        </Card>
      </Grid>
    </Grid>
  )
};
export default Employee;
