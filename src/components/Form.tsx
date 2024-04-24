import React from 'react';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { date } from 'yup';
import dayjs from 'dayjs';
import '../assets/styles/global.scss'
const Form = () => {

    const handleCustomChange = (e: any, fieldName: any) => {
        formik.setFieldTouched(fieldName, true);
        formik.handleChange(e);
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            Date: Date,
            pno: '',
            alphaNum: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),

            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),

            password: Yup
                .string()
                .min(8, 'Password must be 8 characters long')
                .matches(/[0-9]/, 'Password requires a number')
                .matches(/[a-z]/, 'Password requires a lowercase letter')
                .matches(/[A-Z]/, 'Password requires an uppercase letter')
                .matches(/[^\w]/, 'Password requires a symbol')
                .required("Required"),

            passwordConfirmation: Yup
                .string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Required"),

            Date: date().max(
                dayjs().subtract(18, 'years').format("YYYY-MM-DD"),
                "You must be 18 years old")
                .required("Required"),

            pno: Yup
                .string()
                .matches(/^[0-9]+$/, 'Phone Number should contain only digits')
                .min(10, "Phone No should contain 10 digits")
                .max(10, "Phone No should not contain more than 10 digits")
                .required("Required"),
            alphaNum: Yup
                .string()
                .matches(/^[a-zA-Z0-9]+$/, "Field should contain on Alpha-Numeric value")
                .required("Required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form style={{ width: '50%', margin: '0 auto' }} onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <TextField className="form-control"
                    label='First Name'
                    id="firstName"
                    variant="outlined"
                    name="firstName"
                    type="text"
                    aria-describedby="First Name"
                    placeholder="First Name"
                    onChange={(e) => handleCustomChange(e, 'firstName')}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName} />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='error-msg'>{formik.errors.firstName}</div>
                ) : null}
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label='Last Name'
                    aria-describedby="Last Name"
                    placeholder="Last Name"
                    id="lastName"
                    variant="outlined"
                    name="lastName"
                    type="text"
                    onChange={(e) => handleCustomChange(e, 'lastName')}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div className='error-msg'>{formik.errors.lastName}</div>
                ) : null}
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label='Email'
                    value={formik.values.email}
                    aria-describedby="Email"
                    placeholder="Email"
                    id="email"
                    variant="outlined"
                    name="email"
                    type="email"
                    onChange={(e) => handleCustomChange(e, 'email')}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error-msg'>{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label='Password'
                    placeholder="Password"
                    id="password"
                    variant="outlined"
                    name="password"
                    type="password"
                    onChange={(e) => handleCustomChange(e, 'password')}
                    onBlur={formik.handleBlur}
                    value={formik.values.password} />
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div className='error-msg'>{formik.errors.password}</div>
            ) : null}
            <div className="form-group">
                <TextField className="form-control"
                    label='Confirm Password'
                    placeholder="Confirm Password"
                    id="passwordConfirmation"
                    variant="outlined"
                    name="passwordConfirmation"
                    type="password"
                    onChange={(e) => handleCustomChange(e, 'passwordConfirmation')}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirmation} />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                    <div className='error-msg'>{formik.errors.passwordConfirmation}</div>
                ) : null}
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label="D.O.B"
                    id="Date"
                    variant="outlined"  
                    name="Date"
                    onChange={(e) => handleCustomChange(e, 'Date')}
                    onBlur={formik.handleBlur}>
                    </TextField>
                {formik.touched.Date && formik.errors.Date ? (
                    <div className='error-msg'>{formik.errors.Date.toString()}</div>
                ) : null}
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label='Phone Number'
                    id='pno'
                    name='pno'
                    type='text'
                    variant='outlined'
                    value={formik.values.pno}
                    onChange={(e) => { handleCustomChange(e, 'pno') }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.pno && formik.errors.pno ?
                    <div className="error-msg">{formik.errors.pno.toString()}</div> :
                    null
                }
            </div>
            <div className="form-group">
                <TextField className="form-control"
                    label='Alpha Numeric'
                    id='alphaNum'
                    name='alphaNum'
                    type='text'
                    variant="outlined"
                    value={formik.values.alphaNum}
                    onChange={(e) => { handleCustomChange(e, 'alphaNum') }}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.alphaNum && formik.errors.alphaNum ?
                    <div className="error-msg">{formik.errors.alphaNum}</div> :
                    null
                }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Form