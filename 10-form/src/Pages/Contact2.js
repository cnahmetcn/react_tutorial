import React from "react";
import { Formik, useFormik } from "formik";
import validation from "./validation";

const Contact2 = () => {
  const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 2000));
      console.log(values);

      if(values.email === 'test@test.net') {
       return bag.setErrors({email: 'Bu mail adresi kullanılmaktadır.'})
    }
      bag.resetForm();
    },
    validationSchema: validation,
  });

  return (
    <div>
      <h3>HTML & Formik Kullanılan Form</h3>
      {/* <Formik
             initialValues={{ name: '', email: '', message: '' }}
            // onSubmit={ async (values) => {
            //     await new Promise((r) => setTimeout(r, 500));
            //     alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={  (values) => {
                console.log(values);
            }}
        > */}
      {/* {
                ({handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit} className='form'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" placeholder="Name" onChange={formik.handleChange('name')}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" placeholder="Email" onChange={formik.handleChange('email')}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Message" onChange={formik.handleChange('message')}/>   
                    </div>
                    
                    <br />
                    <button type="submit">Submit</button>
                </form>
                )
            } */}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange("name")}
            value={values.name}
            disabled={isSubmitting}
            onBlur={handleBlur("name")}
          />
          {
            errors.name && touched.name && <div className='error'>{errors.name}</div>
          }
        </div>
        <br />
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="Email"
            onChange={handleChange("email")}
            value={values.email}
            disabled={isSubmitting}
            onBlur={handleBlur("email")}
          />
            {
            errors.email && touched.email && <div className='error'>{errors.email}</div>
            }
        </div>
        <br />
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            onChange={handleChange("message")}
            value={values.message}
            disabled={isSubmitting}
            onBlur={handleBlur("message")}
          />
            {
            errors.message && touched.message && <div className='error'>{errors.message}</div>
            }
        </div>

        <br />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>

      {/* </Formik> */}
    </div>
  );
};

export default Contact2;
