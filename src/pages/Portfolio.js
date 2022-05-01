import React from 'react'
import { useEffect } from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Project = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    
    <>
   <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portföy - Tahsin Sungur</title>
          <meta name="description" content="Portföy | Sungur.dev" />
        </Helmet>
      </HelmetProvider>
    <div className="container prose">
      <h1 className="text-zinc-400 mb-2">pek yakında</h1>
      <p className="text-zinc-500 mt-0">kodladığım web projelerini kullandığım teknolojileriyle birlikte burada listeleyeceğim</p>
    </div>
    </>
  )
}

export default Project