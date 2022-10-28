import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero />
     <About />
     <Products />
    </div>
  );
}

export default App;
