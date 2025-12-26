import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../flux/actions';
import { Button } from '@mui/material';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 20) {
        errors.name = 'Must be 20 characters or less';
    }
    if (!values.phonenumber) {
        errors.phonenumber = 'Required';
    }
    else if (!/^\d{10}$/i.test(values.phonenumber)) {
        errors.phonenumber = 'Enter a valid phone number';
    }
    if (!values.birthday) {
        errors.birthday = 'Required';
    }
    else if (!/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/i.test(values.birthday)) {
        errors.birthday = 'Enter in dd-mm-yyyy format';
    }
    if (!values.address) {
        errors.address = 'Required';
    }
    return errors;
};

const Add = () => {
    const nav = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            phonenumber: '',
            birthday: '',
            address: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
            addUser(values);
            alert("Employee Added Successfully")
            window.location.reload()
            nav('/explore')
        }
    });
    return (
        <form onSubmit={formik.handleSubmit} className='form'>
            <label htmlFor="name"><h3>Name</h3></label>
            <input
                className='input'
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                placeholder='Enter Name'
                value={formik.values.name}
            />
            {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

            <label htmlFor="phonenumber"><h3>Phone Number</h3></label>
            <input
                className='input'
                id="phonenumber"
                name="phonenumber"
                type="text"
                onChange={formik.handleChange}
                placeholder='Enter Phone Number'
                value={formik.values.phonenumber}
            />
            {formik.errors.phonenumber ? <div className='error'>{formik.errors.phonenumber}</div> : null}

            <label htmlFor="birthday"><h3>Date of Birth</h3></label>
            <input
                className='input'
                id="birthday"
                name="birthday"
                type="text"
                onChange={formik.handleChange}
                placeholder='Enter Date of Birth'
                value={formik.values.birthday}
            />
            {formik.errors.birthday ? <div className='error'>{formik.errors.birthday}</div> : null}

            <label htmlFor="address"><h3>Address</h3></label>
            <input
                className='input'
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                placeholder='Enter Address'
                value={formik.values.address}
            />
            {formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}

            <br />

            <Button type='submit' variant='contained'>ADD</Button>
        </form>
    );
};
export default Add;
