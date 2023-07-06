import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/test1.jpg'
import AVTR2 from '../../assets/test2.jpg'
import AVTR3 from '../../assets/test3.jpg'
import AVTR4 from '../../assets/test4.jpg'
import AVTR5 from '../../assets/test6.jpg'
import AVTR6 from '../../assets/test7.jpg'
import AVTR7 from '../../assets/test8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Olivier Girardot',
    review: "Olga is a very dedicated person with strong skills as a coder and a web developer.She has a wide range of qualities that include team work, passionate, hard working and a very friendly approach.I can imagine Olga fitting in all sorts of environments, from a small team in a startup to a big multinational",
  },
  {
    avatar: AVTR2,
    name: 'Galina Boyko',
    review: "We’ve been working with Olga in Loyalty Program “Vlasnyj Rakhunok” in Fozzy Group as CRM managers. It was really pleasant to work with Olga as with a professional so as with a person. She was always structured, attentive to details and with high ability to optimize the processes to make the efficient. ",
  },
  {
    avatar: AVTR3,
    name: 'Trinidad Cerri',
    review: "During our time together, we collaborated on two full stack projects, the Rent-a-Kitchen-app (Airbnb clone) and the DreamJob project, a job search app with 2 user types. Olga's contributions were invaluable, as she consistently delivered high-quality code and displayed a keen eye for detail. ",
  },
  {
    avatar: AVTR4,
    name: 'Tetiana Mosiichuk',
    review: "I am pleased to write this recommendation for Olga, who I had the privilege of working with as a CRM Manager at our previous organization. Olga is an exceptional professional who consistently demonstrated her expertise, dedication, and leadership skills during our time together.",
  },
  {
    avatar: AVTR5,
    name: 'Eduardo Roldan',
    review: "Her ability to collaborate effectively and her willingness to support her peers created a positive and productive learning environment. Olga's passion for coding and her unwavering commitment to excellence make her an excellent candidate for any software development role. Thank you Olga !",
  },
  {
    avatar: AVTR6,
    name: 'Emre Ebeturk',
    review: "Olga is a talented and dedicated individual with a broad skillset. I am confident that she will bring the same diligence, determination, and team spirit to her future roles. Given her technical proficiency, quick learning capabilities, team-oriented mindset, and social skills.",
  },
  {
    avatar: AVTR7,
    name: 'Rodrigo Hoffmann',
    review: "I am thrilled to recommend Olga for any web development role! As a classmate in our Web Development Bootcamp, Olga truly stood out from the crowd. Her dedication, seriousness, and unwavering commitment to her work make her a valuable asset to any team. She never gave up until the task was done, going above and beyond to ensure perfection.",
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar,name, review, index}) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials
