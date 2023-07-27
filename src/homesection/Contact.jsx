import React from 'react'
import Form from 'react-bootstrap/Form';
import Navbutton from '../component/Navbutton';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChangename = (event) => {
    setName(event.target.value);
  };
  const handleChangeemail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangemessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    const template = "template_a7dcx6g"
    const service = "service_u9i0dtg"
    const publickey = "H6dc0_UA1aonjman4"
  
    // Send the data to your email using an email service provider, such as SendGrid or Mailchimp.
    emailjs.send(service, template, data, publickey);
  
  
  }

 


  return (
    <div className='py-5 text-light'  >
      <div className='d-flex justify-content-center'>
      <div></div>
      <div>
      <h1 >Want to get in touch?</h1>
      <h1 >Drop me a line!</h1>
      </div>
      </div>
      <div>
      <Form onSubmit={handleSubmit}>
     <div className='d-flex justify-content-center control'>
      <Form.Group className="mb-3 mx-1 control" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control  type="text" placeholder="Enter your name" value={name} onChange={handleChangename}  />
        </Form.Group>
      <Form.Group className="mb-3 mx-1 control" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleChangeemail} />
        </Form.Group>
     </div>
     <div className='d-flex justify-content-center'>
      <div></div>
      <div>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Label>MESSAGE</Form.Label>
        <Form.Control as="textarea" rows={5} style={{width:"330px"}} value={message} onChange={handleChangemessage} />
      </Form.Group>
      </div>
     </div>
     <div className='text-center'><button type="submit" className='btnClass py-1 px-3'>SEND</button></div>
     </Form>

      </div>

    </div>
  )
}
