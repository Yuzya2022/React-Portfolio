import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio4.jpg'
import IMG2 from '../../assets/portfolio6.png'
import IMG3 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>DreamJob</h3>
          <a href="https://github.com/trinidadcerri/traum-job" className='btn' target="_blank">GitHub</a>
          <a href="https://dream-job-website.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>DreamJob</h3>
          <a href="https://github.com/trinidadcerri/traum-job" className='btn' target="_blank">GitHub</a>
          <a href="https://dream-job-website.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>DreamJob</h3>
          <a href="https://github.com/trinidadcerri/traum-job" className='btn' target="_blank">GitHub</a>
          <a href="https://dream-job-website.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
