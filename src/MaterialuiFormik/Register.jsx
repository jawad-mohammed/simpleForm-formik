import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Register = () => {

const initialValues={
username:'',
email:'',
password:''
}
const onSubmit=(val)=>{
console.log(val);
}

const validationSchema=Yup.object({
    username:Yup.string().required('Please enter your name').min(3,'min 3 chars').max(6,'max 6 chars').required(),
    email:Yup.string().email().required("valid email required"),
    password:Yup.string().min(3,'min 3 chars').max(6,'max 6 chars').required()
})

    const formik =    useFormik({
    initialValues,
    onSubmit,
    validationSchema,



    })

  return (
    <>
  
    

      
        <form onSubmit={formik.onSubmit}>
        <TextField type="text"
          label="Name"
          name='username'
          value={formik.values.username}
          onChange={formik.handleChange}
          
        />
        {formik.errors.username && formik.errors.username}

          <TextField
        label="email"
         name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
         
        />
         {formik.errors.email && formik.errors.email}
         
          <TextField
       label="Password"
      name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
         
        />
         {formik.errors.password && formik.errors.password}
         <Button variant="contained" type='submit'>Register</Button>
        </form>
        
    
 
    
    
    
    
    
    
    
    </>
  )
}

export default Register