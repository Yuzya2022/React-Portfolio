import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.jpg'
import IMG2 from '../../assets/portfolio5.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio8.jpg'
import IMG5 from '../../assets/portfolio9.png'


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
          <div className="portfolio__item-cta">
           <a href="https://github.com/trinidadcerri/traum-job" className='btn' target="_blank">GitHub</a>
           <a href="https://dream-job-website.herokuapp.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Game project" />
          </div>
          <h3>GameChanger+</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/giacomo-dantonio/game-changer-website" className='btn' target="_blank">GitHub</a>
           <a href="https://game-changer-website.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="SheCodes" />
          </div>
          <h3>SheCodes</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/Yuzya2022/Porfolio-project" className='btn' target="_blank">GitHub</a>
           <a href="https://tangerine-mandazi-ea6acc.netlify.app/work.html" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="AI_Summarizer" />
          </div>
          <h3>AI Article Summarizer</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/Yuzya2022/Article-summarizer-" className='btn' target="_blank">GitHub</a>
           <a href="https://singular-fudge-422eed.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item' >
          <div className="portfolio__item-image">
            <img src={IMG5} alt="AI_Image"/>
          </div>
          <h3>My Image Generator</h3>
          <div className="portfolio__item-cta">
           <a href="https://github.com/Yuzya2022/ImageAI" className='btn' target="_blank">GitHub</a>
           <a href="https://chimerical-nasturtium-d48b3b.netlify.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
