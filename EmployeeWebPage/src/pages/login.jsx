import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from "axios"
import { Button, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Signup from "./signup";


const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  } if (!values.password) {
    errors.password = 'Required';
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,12}/i.test(values.password)) {
    errors.password = 'Invalid password';
  }
  return errors;
};

const Login = () => {
  const navigate = useNavigate()
  const [signUpOpen, setsignUpOpen] = useState(false);
  const handlesignUpOpen = () => {
    setsignUpOpen(true);
  };
  const handlesignUpClose = () => {
    setsignUpOpen(false);
  };
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetchdata = async () => {
      await axios.get('https://65dd6c23e7edadead7ede22c.mockapi.io/login')
        .then(res => setUser(res.data))
    }
    fetchdata()
  }, [])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      try {
        console.log(values)
        const userFound = user.find((item) => item.email === values.email && item.password == values.password)
        sessionStorage.setItem('username',userFound.name)
        console.log(userFound);
        const check=(userFound.email).substring(userFound.email.indexOf("@"),(userFound.email).length);
        console.log(check);
        if (check=="@ltts.com") {
          alert("Logged in as Admin ")
          navigate( '/home' )
        }
        else if(check!="@ltts.com"){
          alert("Logged in as User ")
          navigate('/')
        }
        else {
          alert("Login Failed")
        }
      }
      catch (error) {
        alert("error")
      }
      window.location.reload()
      
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}className="form">
      
      <label htmlFor="email"><h3>Email </h3></label>
      <input
        className="input"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

      <label htmlFor="password"><h3>Password </h3></label>
      <input
       className="input"
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

      <br />

      <Button variant="contained" type="submit">LOGIN</Button>

      <br />

      <div style={{ fontSize: '20px' }}>Dont' have an account
        <Link onClick={handlesignUpOpen}> SignUp</Link>
        <Modal
          open={signUpOpen}
          onClose={handlesignUpClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 300, height: 'auto', bgcolor: 'background.paper', border: 'none', boxShadow: 24, p: 4,
          }}>
            <div className='signupHeader'>
            <h2>SIGN UP</h2>
            <Tooltip title='Close'>
            <IconButton onClick={handlesignUpClose} style={{ color: 'red' }}><CancelIcon /></IconButton>
            </Tooltip>
          </div>
            <hr />
            <Signup />
          </Box>
        </Modal>
      </div>

    </form>

  );
};

export default Login