import React from 'react'
import { Formik, Form, Field } from 'formik'


const Contact1 = () => {
  return (
    <div>
        <h3>Tamamen Formik Kullanılan Form</h3>
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            // onSubmit={ async (values) => {
            //     await new Promise((r) => setTimeout(r, 500));
            //     alert(JSON.stringify(values, null, 2));
            // }}
            onSubmit={  (values) => {
                console.log(values);
            }}
        >
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Name" />
                <br />
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Email" />
                <br />
                <label htmlFor="message">Message</label>
                <Field as="textarea" id="message" name="message" placeholder="Message" />
                <br />
                <button type="submit">Submit</button>
            </Form>

                
        </Formik>
    </div>
  )
}

export default Contact1