import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css'
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vuqubtn', 'template_iscx5es', form.current, '06DZCtK1kvVVjhK2_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div  className='form-container'>
      <div className='middle-form'>
    <form ref={form} onSubmit={sendEmail}>
      <label>subject</label><br/>
      <input type="text" name="subject" /><br/>
      <label>Email</label><br/>
      <input type="email" name="email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
};
export default ContactUs