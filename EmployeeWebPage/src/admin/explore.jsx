import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import AddBoxIcon from '@mui/icons-material/AddBox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CancelIcon from '@mui/icons-material/Cancel';
import { getUsers, deleteUser } from '../flux/actions';
import Store from '../flux/store';
import Add from './addData';
import Tooltip from '@mui/material/Tooltip';

const Explore = () => {
  const [users, setUsers] = useState(Store.getUsers);

  const [addopen, setaddOpen] = useState(false);
  const handleAddOpen = () => { setaddOpen(true); };
  const handleAddClose = () => { setaddOpen(false); };

  useEffect(() => {
    Store.on("change", updateUsers);
    getUsers();
    return () => { Store.removeListener("change", updateUsers); };
  }, []);

  const updateUsers = () => { setUsers(Store.getAll()); };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    alert("Employee Deleted Successfully")
  };

  const [deleteConfirmation, setDeleteConfirmation] = React.useState(false);
  const handleDelete = (id) => {
    setDeleteConfirmation({ ...deleteConfirmation, [id]: true, });
  }
  const handleCancelDelete = () => setDeleteConfirmation(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '10px', marginRight: '160px' }}>
          <Link to="/home">
            <Tooltip title='Back'>
            <IconButton style={{ backgroundColor: '#007FFF' }}><KeyboardBackspaceIcon style={{ fontSize: '25px' }} /></IconButton>
            </Tooltip>
            </Link>
          <Link to="/home">
            <Tooltip  title="Home">
            <IconButton style={{ marginRight: '400px', backgroundColor: '#007FFF' }}><HomeIcon style={{ fontSize: '25px' }} /></IconButton>
            </Tooltip>
            </Link>
        </div>
        <Tooltip title='Add'>
          <IconButton onClick={handleAddOpen}><AddBoxIcon style={{ fontSize: '30px', color: '#007FFF' }} /></IconButton>
        </Tooltip>
      </div>

      <Modal
        open={addopen}
        onClose={handleAddClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 'auto', height: 'auto', bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4,
        }}>
          <div className='add-modal'>
            <h2>ADD</h2>
            <Tooltip title='Close'>
              <IconButton onClick={handleAddClose} style={{ color: 'red' }}><CancelIcon /></IconButton>
            </Tooltip>
          </div>
          <hr />
          <Add />
        </Box>
      </Modal>

      <Card sx={{ width: 700, display: 'flex', flexDirection: 'column' }}>
        {Store.users.map((item) => (
          <Card className='card' sx={{ backgroundColor: '#8878c3' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
              <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
              <Typography gutterBottom variant="h7" color="text.secondary">DATE OF BIRTH: {item.birthday}</Typography>
              <Typography gutterBottom variant="h7" color="text.secondary">PHONE NUMBER: {item.phonenumber}</Typography>
              <Typography gutterBottom variant="h7" color="text.secondary">ADDRESS: {item.address}</Typography>
            </CardContent>

            <CardActions className='card-actions'>
              <Link to={`/editData/${item.id}/${item.name}/${item.phonenumber}/${item.birthday}/${item.address}`}>
                <Tooltip title='Edit'>
                  <IconButton ><EditIcon style={{ color: 'blue' }} /></IconButton>
                </Tooltip>
              </Link>
              <Tooltip title='Delete'>
                <IconButton><DeleteIcon onClick={() => handleDelete(item.id)} style={{ color: 'red' }} /></IconButton>
              </Tooltip>
              <Modal
                id={`${item.id}`}
                open={deleteConfirmation[item.id]}
                onClose={handleCancelDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4, }}>
                  <Typography id="spring-modal-title" variant="h6" component="h2">
                    <div className='deleteF-icon'>
                      <IconButton><DeleteForeverIcon style={{ color: 'red', fontSize: '4rem' }} /></IconButton>
                    </div>
                    <h2 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>Delete Employee</h2>
                  </Typography>
                  <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                    <h4 style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>Are you sure you want to delete this Employee?</h4>
                    <div className='delete-actions'>
                      <Button variant="outlined" sx={{ width: '140px' }} color='secondary' style={{ borderColor: 'blue', color: 'blue' }} onClick={handleCancelDelete}>Cancel</Button>
                      <Button onClick={() => handleDeleteUser(item.id)} variant="contained" color='primary' style={{ backgroundColor: 'red', color: 'white' }}>Yes, Delete</Button>
                    </div>
                  </Typography>
                </Box>
              </Modal>
            </CardActions>
          </Card>
        ))}
      </Card>
    </div>
  )
};
export default Explore;
