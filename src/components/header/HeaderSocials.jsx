import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
       href="https://www.linkedin.com/in/olga-iuzvyshyna/"
       target="_blank"><BsLinkedin/></a>
      <a
       href="https://github.com/Yuzya2022"
       target="_blank"><FaGithub/></a>
      <a
       href="https://www.instagram.com/ollla_la_la/"
       target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
