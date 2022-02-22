import React from 'react';
import { useFormik } from "formik";
import "./style.css"

export default function App() {
  const initialValues = {
    name: "",
    address: ""
  };
  const onSubmit = (values) => {
console.log(values);
  };

  //validation
  const validate = (values) => {
    //values.name    //values.address
    //errors.name     //errors.address
    //errors.name ="Please fill your details "
    let errors = {};
    if (!values.name) {
      errors.name = "Please fill your name ";
    }
    if (!values.address) {
      errors.address = "Please fill your address ";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log("Form values", formik.errors);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <h4 className="error">{formik.errors.name}</h4>}
        <br />
        <label htmlFor="name">Address: </label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && <h4 className="error">{formik.errors.address}</h4>}
        <br />
        <button type="submit">submit</button>
      </form>







    </>
  );
}
