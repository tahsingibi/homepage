import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route component={<notFound />} />
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/portfolio" element={<Portfolio/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
