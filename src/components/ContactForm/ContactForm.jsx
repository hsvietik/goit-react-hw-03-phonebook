import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export class ContactForm extends Component {
  handleSubmit = ({ name, number }, { resetForm }) => {
    this.props.addContact(name, number);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <Form className={css.contactForm}>
          <label htmlFor="name">Name</label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="name"
            id="name"
          />
          <ErrorMessage name="name" />
          <label htmlFor="number">Number</label>
          <Field
            className={css.contactFormInput}
            type="tel"
            name="number"
            id="number"
          />
          <ErrorMessage name="number" />
          <button className={css.contactFormButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}
ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
