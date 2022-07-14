import { useEffect } from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import profilPicture from '../img/about.jpg'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hakkımda - Tahsin Sungur</title>
          <meta name="description" content="Hakkımda | Sungur.dev" />
        </Helmet>
      </HelmetProvider>

      <div className="headlinePic">
            <img src={profilPicture} alt="Tahsin Sungur"/>
          </div>
      <div className="AboutPage container content">
      <h2 className="headline">Merhaba, ben Tahsin Sungur</h2>
        <p>İzmir'de yaşıyorum. Freelance olarak uzun zamandır grafik tasarım ve yazılım alanlarında çalışmalar yapıyorum. Hobi olarak mobil fotoğrafçılık, renklendirme, video çekimi ve kurgu işleriyle ilgiliyim.</p>
        <p>Kod yazmanın verdiği hazdan ve bunu tam zamanlı bir işe çevirmek isteğimden dolayı front-end alanında kendimi geliştirmeye daha fazla zaman ayırıyorum. Bu siteyi de yeni öğrenmeye başladığım <strong>React</strong> ile kodladım.</p>
        <p>Daha fazla proje üretme ve tamamen yazılım odaklı bir gelecek planım için burası ilk adım olmasa da benim adıma bir kilometre taşı.</p>
      </div>

      <div className="AboutPage container content">
        <h2 className="headline">Beceriler</h2>
        
        <div className="Beceriler">
          <div className="beceriBlokTitle">
            Tasarım & Video
            </div>
            <div className="beceriBlokTag">
                <span className="beceriTag">
                  Photoshop
                </span>
                <span className="beceriTag">
                  Illustrator
                </span>
                <span className="beceriTag">
                  Figma
                </span>
                <span className="beceriTag">
                  Adobe XD
                </span>
                <span className="beceriTag">
                  Premiere Pro
                </span>
                <span className="beceriTag">
                  DaVinci Resolve
                </span>
              </div>
              </div>
              
              <div className="Beceriler">
                <div className="beceriBlokTitle">
                  Yazılım
                </div>
                <div className="beceriBlokTag">
                  <span className="beceriTag">
                    HTML
                  </span>
                  <span className="beceriTag">
                    CSS
                  </span>
                  <span className="beceriTag">
                    Javascript
                  </span>
                  <span className="beceriTag">
                    ReactJS
                  </span>
                  <span className="beceriTag">
                    PHP
                  </span>
                </div>
              </div>
            </div>
    </>
  )
}

export default About