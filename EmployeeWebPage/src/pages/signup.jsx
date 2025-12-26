import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "Required"
    } else if (values.name.length > 20) {
        errors.name = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/i.test(values.password)) {
        errors.password = 'Should include one uppercase,one lowercase,one numeric,one special symbol,minimum eight characters and maximum sixteen characters';
    }

    if (!values.confirmpassword) {
        errors.confirmpassword = "Password is required to confirm password.";
    } else if (values.confirmpassword != values.password) {
        errors.confirmpassword = 'Password  does not match'
    }

    return errors;
};

const Signup = () => {
    const [user, setUser] = useState('');
    useEffect(() => {
        const fetchdata = async () => {
            await axios.get('https://65dd6c23e7edadead7ede22c.mockapi.io/login')
                .then(res => setUser(res.data))
        }
        fetchdata()
    }, [])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        validate,
        onSubmit: values => {
            const userdata = user.find((iter) => iter.email == values.email)
            if (userdata) {
                alert("Email already exist")
            } else {
                alert(JSON.stringify('Signed Up Sucessfully .Please login  to continue'));
                axios.post("https://65dd6c23e7edadead7ede22c.mockapi.io/login", values)
                navigate('/')
            }
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className='form'>
            
            <label htmlFor="name"><h3>Name </h3> </label>
            <input
                className='input'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder='Enter your name'
            />
            {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

            <label htmlFor="email"><h3>Email </h3></label>
            <input
                className='input'
                id="email" name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Enter your email'
            />
            {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}

            <label htmlFor="password"><h3>Password </h3></label>
            <input
                className='input'
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Create password'
            />
            {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}

            <label htmlFor="confirmpassword"><h3>Re-enter Password </h3></label>
            <input
                className='input'
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmpassword}
                placeholder="Confirm password"
            />
            {formik.errors.confirmpassword ? <div className='error'>{formik.errors.confirmpassword}</div> : null}

            <br />

            <Button variant="contained" type="submit">SIGNUP</Button>
        </form>
    );
};

export default Signup