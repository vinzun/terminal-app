import React from 'react';
import SEO from '../components/seo';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/contact.scss';
import Layout from '../components/Layout/layout';
import StartTracking from '../components/startTracking';

const contact = () => {
  const onSubmit = () => {
    setTimeout(() => {
      const fields = document.getElementById('fields');
      fields.style.display = 'none';

      const submitted = document.getElementById('submitted');
      submitted.style.display = 'block';
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('This field is required'),
        lastName: Yup.string().required('This field is required'),
        email: Yup.string()
          .email('Invalid Email Address')
          .required('This field is required'),
        message: Yup.string().required('This field is required')
      })}
      onSubmit={onSubmit}
      render={({
        errors,
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <Layout>
          <SEO title="Contact" />
          <div className="contactWrapper">
            <section>
              <div className="w-container">
                <div>
                  <p id="heading">GETTING IN TOUCH IS EASY</p>
                  <p id="description">
                    We'll get back to you ASAP. No worries.
                  </p>
                </div>
                <div id="fields">
                  <div className="name">
                    <div>
                      <Field
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        type="text"
                        name="firstName"
                        className={
                          errors.firstName && touched.firstName
                            ? 'firstName err'
                            : 'firstName'
                        }
                        placeholder="First Name"
                        aria-label="First Name"
                      />
                      <ErrorMessage name="firstName">
                        {msg => <div className="errMsg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                    <div>
                      <Field
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        type="text"
                        name="lastName"
                        className={
                          errors.lastName && touched.lastName
                            ? 'lastName err'
                            : 'lastName'
                        }
                        placeholder="Last Name"
                        aria-label="Last Name"
                      />
                      <ErrorMessage name="lastName">
                        {msg => <div className="errMsg">{msg}</div>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div>
                    <Field
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      type="email"
                      name="email"
                      className={
                        errors.email && touched.email ? 'email err' : 'email'
                      }
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                    <ErrorMessage name="email">
                      {msg => <div className="errMsg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <Field
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      name="message"
                      className={
                        errors.message && touched.message
                          ? 'message err'
                          : 'message'
                      }
                      cols="30"
                      rows="10"
                      placeholder="What do you need help with?"
                      as="textarea"
                      aria-label="What do you need help with?"
                    />
                    <ErrorMessage name="message">
                      {msg => <div className="errMsg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="sendBtn">
                    <Field
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="sendEmail"
                      id="sendEmail"
                      value="SEND EMAIL"
                    />
                  </div>
                  <p className="phoneCall">
                    Prefer a phone call? Toll-free 1-800-555-1234
                  </p>
                </div>
                <div className="success" id="submitted">
                  <p className="title">Thank You For Contacting Us!</p>
                  <p className="msg">
                    Your submission has been received and we will reply shortly.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <StartTracking />
        </Layout>
      )}
    />
  );
};

export default contact;
