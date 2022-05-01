import React from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
        <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Sayfa Bulunamadı - Sungur.dev</title>
          <meta name="description" content="Tahsin Sungur - Sungur.dev" />
        </Helmet>
    </HelmetProvider>
        <div className="container prose py-4">
            <h1 className="text-zinc-400">404 - Sayfa Bulunamadı</h1>
        </div>
    </>
  )
}

export default NotFound