import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
