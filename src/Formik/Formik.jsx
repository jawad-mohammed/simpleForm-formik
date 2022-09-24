import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Formik = () => {

 const  initialValues={
    username:'',
    password:''
 }
const onSubmit=(val)=>{
console.log(val);
}
const validationSchema=Yup.object({
    username:Yup.string().email().required('valid email required'),
    password:Yup.string().min(4,'password must be greater than  4 chars')
    .max(7,'password should be less than 7 chars')
})

 const formik = useFormik({
initialValues,
onSubmit,
validationSchema
    })

  return (
    <>
    <div style={{display:'flex',justifyContent:'center',paddingTop:'10px'}}>
    Login
    <form onSubmit={formik.onSubmit}>
        <TextField type="text"name='username' value={formik.values.username} onChange={formik.handleChange} placeholder="UserName"/><br />
    {/* //displaying errors  */}
        {formik.errors.username &&  formik.errors.username} 
        
        <TextField type="text" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder="Password"/> <br />
    {formik.errors.password && formik.errors.password}
        <button type='submit'>Log In</button>
    </form>
    </div>
    
    
    
    </>
  )
}

export default Formik