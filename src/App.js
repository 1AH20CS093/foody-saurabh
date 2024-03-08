
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testinomial from './components/Testinomial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return <div className="App">
    <Home/>
    <About/>
    <Work />
    <Testinomial/>
    <Contact />
    <Footer/>
  </div>;
}

export default App;
