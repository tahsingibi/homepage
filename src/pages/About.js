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
        <p>Kod yazmanın verdiği hazdan ve bunu tam zamanlı bir işe çevirmek isteğimden dolayı front-end alanında kendimi geliştirmeye daha fazla zaman ayırıyorum. Bu siteyi de yeni öğrenmeye başladığım React ile kodladım.</p>
        <p>Daha fazla proje üretme ve tamamen yazılım odaklı bir gelecek planım için burası ilk adım olmasa da benim adıma bir kilometre taşı.</p>
      </div>

      <div class="AboutPage container content">
        <h2 class="headline">Beceriler</h2>
        
        <div class="Beceriler">
          <div class="beceriBlokTitle">
            Tasarım & Video
            </div>
            <div class="beceriBlokTag">
                <span class="beceriTag">
                  Photoshop
                </span>
                <span class="beceriTag">
                  Illustrator
                </span>
                <span class="beceriTag">
                  Figma
                </span>
                <span class="beceriTag">
                  Adobe XD
                </span>
                <span class="beceriTag">
                  Premiere Pro
                </span>
                <span class="beceriTag">
                  DaVinci Resolve
                </span>
              </div>
              </div>
              
              <div class="Beceriler">
                <div class="beceriBlokTitle">
                  Yazılım
                </div>
                <div class="beceriBlokTag">
                  <span class="beceriTag">
                    HTML
                  </span>
                  <span class="beceriTag">
                    CSS
                  </span>
                  <span class="beceriTag">
                    Javascript
                  </span>
                  <span class="beceriTag">
                    ReactJS
                  </span>
                  <span class="beceriTag">
                    PHP
                  </span>
                </div>
              </div>
            </div>
    </>
  )
}

export default About