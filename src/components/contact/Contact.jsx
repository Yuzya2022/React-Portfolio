import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wc3nvur', 'template_aom2a0i', form.current, 'x_gpu9qTo6Y_GuB0u')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon '/>
            <h4>Email</h4>
            <h5>iuzvyshyna.olga@gmail.com</h5>
            <a href="mailto:iuzvyshyna.olga@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <AiOutlineMessage className='contact__option-icon '/>
            <h4>LinkedIn</h4>
            <h5>Olga Iuzvyshyna</h5>
            <a href="https://www.linkedin.com/in/olga-iuzvyshyna/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon '/>
            <h4>WhatsApp</h4>
            <h5>+491628904332</h5>
            <a href="https://wa.me/491628904332" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required > </textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
