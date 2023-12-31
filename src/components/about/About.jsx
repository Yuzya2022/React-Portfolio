import React from 'react';
import './about.css';
import ME from '../../assets/avatar10.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>10+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Teams</h5>
              <small>International</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Motivated professional with a background in retail marketing and a strong interest in Tech.
          I work as Teaching Assistant after completing a intense Web Development Bootcamp,
          where I gained hands-on experience with programming languages and building applications.
          </p>

          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
};

export default About;
