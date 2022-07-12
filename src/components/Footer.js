import React from 'react'
import {FaRegEnvelope, FaTwitter, FaInstagram, FaGithub} from "react-icons/fa"

function Footer() {
  return (
    <>
    <div className="container"><hr/></div>
    <footer className="footer container content">
      <p className="footerLeft"><strong>ReactJS</strong> ve <strong>TailwindCSS</strong> ile hazırlandı.</p>
      <p className="footerRight">
        <a href="mailto:mtahsinsungur@gmail.com" target="_blank">
          <FaRegEnvelope/>
        </a>
        <a href="https://twitter.com/tahsingibi" target="_blank">
          <FaTwitter/>
        </a>
        <a href="https://instagram.com/tahsingibi" target="_blank">
          <FaInstagram/>
        </a>
        <a href="https://github.com/tahsingibi" target="_blank">
          <FaGithub/>
        </a>
      </p>
    </footer>
    </>
  )
}

export default Footer