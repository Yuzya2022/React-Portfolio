import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/test1.jpg'
import AVTR2 from '../../assets/test2.jpg'
import AVTR3 from '../../assets/test3.jpg'
import AVTR4 from '../../assets/test4.jpg'
import AVTR5 from '../../assets/test6.jpg'
import AVTR6 from '../../assets/test7.jpg'
import AVTR7 from '../../assets/test8.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Olivier Girardot</h5>
            <small className='client__review'>
             Olga is a very dedicated person with strong skills as a coder and a web developper.
             She has a wide range of qualities that include team work, passionate, hard working and a very friendly approach.
             I can imagine Olga fitting in all sorts of environments, from a small team in a startup to a big multinational.
            </small>
          </article>
          <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Olivier Girardot</h5>
            <small className='client__review'>
             Olga is a very dedicated person with strong skills as a coder and a web developper.
             She has a wide range of qualities that include team work, passionate, hard working and a very friendly approach.
             I can imagine Olga fitting in all sorts of environments, from a small team in a startup to a big multinational.
            </small>
          </article>
          <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Olivier Girardot</h5>
            <small className='client__review'>
             Olga is a very dedicated person with strong skills as a coder and a web developper.
             She has a wide range of qualities that include team work, passionate, hard working and a very friendly approach.
             I can imagine Olga fitting in all sorts of environments, from a small team in a startup to a big multinational.
            </small>
          </article>
          <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Olivier Girardot</h5>
            <small className='client__review'>
             Olga is a very dedicated person with strong skills as a coder and a web developper.
             She has a wide range of qualities that include team work, passionate, hard working and a very friendly approach.
             I can imagine Olga fitting in all sorts of environments, from a small team in a startup to a big multinational.
            </small>
          </article>
        </div>
    </section>
  )
}

export default Testimonials
