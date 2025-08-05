import './App.css';
import Background from './components/Background/Background';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;