import React from 'react'
import {FaGithub} from 'react-icons/fa'

function Footer() {


  return (
    <>
    <div className="container mt-8 h-[1px] bg-zinc-800"></div>
    <div class="container prose py-4">
      <div className="text-zinc-500 flex items-center">
        <a href="https://github.com/tahsingibi/homepage" target="_blank" className="text-zinc-400 mr-4 text-2xl hover:scale-110"><FaGithub/></a>
        <strong className="text-zinc-400 mx-2">ReactJS</strong> ve <strong className="text-zinc-400 mx-2">TailwindCSS</strong> ile hazırlandı.
      </div>
    </div>
    </>
  )
}

export default Footer