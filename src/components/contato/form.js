import React from 'react';
import './styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikField from './FormikField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

const initialValues = {
  name: '',
  message: '',
  email: '',
}


const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .required('Required!'),
  message: Yup.string()
    .required('Required!'),
  email: Yup.string()
    .lowercase()
    .email('Must be a valid email!')
    .required('Required!'),
})

const Formulario = ({ contatoRef }) => {

  const handleSubmit = (e , value) => {
    e.preventDefault();
    console.log(e.target)

    emailjs.sendForm('gmail', 'template_xigp8ld', e.target , 'user_PEmMhmxPcChtmcH3hWoxO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('Obrigado por entrar em contato!')
  }
return(
  <div 
  ref={contatoRef}
  className="form1">
      <h1 className="formMessage">Contato</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => {
          return(
            <Form onSubmit={handleSubmit}>
              <FormikField name='name' label='Nome' />
              <FormikField name='email' label='Email' />
              <FormikField rows={4} multiline={true} name='message' label='Mensagem' />

              <Button variant="contained" color="primary" disabled={!dirty || !isValid} type="submit">
                  Enviar
              </Button>
            </Form>
          )
        }}
      </Formik>
  </div>
)};

export default Formulario;