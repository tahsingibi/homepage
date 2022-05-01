import React from 'react'
import { useEffect } from 'react'
import profil from '../img/profil.jpg'
import Skills from '../components/Skills'
import {Helmet, HelmetProvider} from 'react-helmet-async'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hakkımda - Tahsin Sungur</title>
          <meta name="description" content="Hakkımda | Sungur.dev" />
        </Helmet>
      </HelmetProvider>
        <div className="container prose py-4">
          <h1 className="font-semibold text-zinc-400 mb-2">Ben Tahsin Sungur.</h1>
          <h1 className="text-zinc-300 text-2xl font-light">27 yaşında bir Front-end developer'ım.</h1>
        </div>
        <div className="max-w-5xl mx-auto my-4">
           <img src={profil} alt="Tahsin Sungur"/>
        </div>
        <div className="container prose py-4">
          <p className="text-zinc-500">İzmir'de yaşıyorum. Freelance olarak uzun zamandır grafik tasarım ve yazılım alanlarında çalışmalar yapıyorum. Hobi olarak mobil fotoğrafçılık, renklendirme, video çekimi ve kurgu işleriyle ilgiliyim.</p>
          <p className="text-zinc-500">Kod yazmanın verdiği hazdan ve bunu tam zamanlı bir işe çevirmek isteğimden dolayı front-end alanında kendimi geliştirmeye daha fazla zaman ayırıyorum. Bu siteyi de yeni öğrenmeye başladığım <strong className="text-zinc-400 font-bold">React</strong> ile kodladım.</p>
          <p className="text-zinc-500">Daha fazla proje üretme ve tamamen yazılım odaklı bir gelecek planım için burası ilk adım olmasa da benim adıma bir kilometre taşı.</p>
          <p className="text-zinc-500"></p>
        </div>
        <Skills/>
      
    </div>
  )
}

export default About