import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { updateUser } from '../flux/actions';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

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

const Update = () => {
    const { id, name, phonenumber, birthday, address } = useParams();
    const nav = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: name,
            phonenumber: phonenumber,
            birthday: birthday,
            address: address,
        },
        validate,
        onSubmit: values => {
            console.log(values);
            updateUser(id, values);
            alert("Details Updated Successfully")
            nav('/explore')
        }
    });
    return (
        <div className='edit-page'>
            <Link to="/explore">
                <IconButton style={{ marginRight: '1000px', backgroundColor: '#007FFF' }} >
                    <KeyboardBackspaceIcon style={{ fontSize: '30px', marginRight: '2px' }} />
                </IconButton>
            </Link>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name"><h3>Name</h3></label>
                <input
                    className='inputEdit'
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}

                <label htmlFor="phonenumber"><h3>Phone Number</h3></label>
                <input
                    className='inputEdit'
                    id="phonenumber"
                    name="phonenumber"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                />
                {formik.errors.phonenumber ? <div className='error'>{formik.errors.phonenumber}</div> : null}

                <label htmlFor="birthday"><h3>Date of Birth</h3></label>
                <input className='inputEdit'
                    id="birthday"
                    name="birthday"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.birthday}
                />
                {formik.errors.birthday ? <div className='error'>{formik.errors.birthday}</div> : null}

                <label htmlFor="address"><h3>Address</h3></label>
                <input
                    className='inputEdit'
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.errors.address ? <div className='error'>{formik.errors.address}</div> : null}

                <br />

                <Button type='submit' variant='contained' style={{ marginTop: '10px', marginLeft: '90px' }}>UPDATE</Button>
            </form>
        </div>

    );
};
export default Update;
