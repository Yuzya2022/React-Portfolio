import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { Icon } from 'react-icons-kit';
import { messageSquare } from 'react-icons-kit/feather';
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>iuzvyshyna.olga@gmail.com</h5>
            <a href="mailto:iuzvyshyna.olga@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <Icon icon={messageSquare} />
            <h4>LinkedIn</h4>
            <h5>Olga Iuzvyshyna</h5>
            <a href="https://www.linkedin.com/in/olga-iuzvyshyna/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+491628904332</h5>
            <a href="https://wa.me/491628904332" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form action="">
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
