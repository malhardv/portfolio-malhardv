import React from 'react'
import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="logo" className='mx-7' width={90}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href = "https://www.linkedin.com/in/malhardv/" target = "blank"><FaLinkedin></FaLinkedin></a>
          <a href = "https://github.com/malhardv"  target = "blank"><FaGithub></FaGithub></a>
        </div>
    </nav>
  )
}

export default Navbar;
