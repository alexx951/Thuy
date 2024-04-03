
import './App.css';
import Home from './pages/Home';  
import Avis from './pages/Avis';
import { Footer } from './components/Footer';
import  Header from './components/Header';
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
  
        </Routes>
        <Header.Navbar  />

        </BrowserRouter>


        <Footer />
    </div>
  );
}

export default App;
