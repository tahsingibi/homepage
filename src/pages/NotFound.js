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
        <div className="container content">
            404 sayfası
        </div>
    </>
  )
}

export default NotFound