import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import {Routes, Route} from 'react-router-dom';
import Projeler from './pages/Projeler';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route component={<notFound />} />
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/projeler" element={<Projeler/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
