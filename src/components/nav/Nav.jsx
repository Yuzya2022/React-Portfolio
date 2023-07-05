import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { RiFolderUserLine  } from 'react-icons/ri';
import { MdMailOutline } from 'react-icons/md';
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><RiFolderUserLine /></a> {/* Replaced with MdFolder */}
      <a href="#contact"><MdMailOutline /></a> {/* Replaced with MdMail */}
    </nav>
  )
}

export default Nav
