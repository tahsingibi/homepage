import {useEffect} from 'react'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import About from '../components/Card/About'
import BlogPost from '../components/Card/BlogPost'
import Project from '../components/Card/Project'


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


    <div className="container content">
      <About/>
      <Project/>
      <BlogPost/>
    </div>

    </>
  )
}

export default Home