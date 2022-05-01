import React from 'react'
import {useEffect} from 'react'
import profil from '../img/profil.jpg'
import {FaTwitter, FaInstagram, FaWordpress} from 'react-icons/fa'
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
   <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tahsin Sungur</title>
          <meta name="description" content="Tahsin Sungur - Sungur.dev" />
        </Helmet>
    </HelmetProvider>
    <div className="container prose py-4">
        <h1 className="font-semibold text-zinc-400 mb-2">Ben Tahsin Sungur.</h1>
        <h1 className="text-zinc-300 text-2xl font-light">27 yaşında bir Front-end developer'ım.</h1>
        <p className="text-zinc-500">Grafik tasarım, mobil fotoğrafçılık, video ve yazılım alanlarında kendimi geliştirmek üzere bu alanlarda çalışmalar yapıyorum.</p>
        <p className="flex items-center">
            <a target="_blank" rel="noreferrer" className="bg-neutral-600 hover:opacity-70 text-zinc-300 px-4 h-12 flex items-center rounded-full mr-2" href="mailto:mtahsinsungur@gmail.com">Eposta</a>
            <a target="_blank" rel="noreferrer" className="bg-neutral-600 hover:opacity-70 text-zinc-300 w-12 h-12 text-xl flex justify-center items-center rounded-full mr-2" href="https://twitter.com/tahsingibi"> <FaTwitter /> </a>
            <a target="_blank" rel="noreferrer" className="bg-neutral-600 hover:opacity-70 text-zinc-300 w-12 h-12 text-xl flex justify-center items-center rounded-full mr-2" href="https://instagram.com/tahsingibi"> <FaInstagram /> </a>
            <a target="_blank" rel="noreferrer" className="bg-neutral-600 hover:opacity-70 text-zinc-300 w-12 h-12 text-xl flex justify-center items-center rounded-full" href="https://tahsinbey.com"><FaWordpress/></a>
        </p>
    </div>

    <div className="max-w-5xl mx-auto my-4 ">
    <img src={profil} alt="Tahsin Sungur"/>
    </div>


    </>
  )
}

export default Home