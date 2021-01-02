import './App.css';

import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Projects from './components/Projects/Projects.jsx'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
