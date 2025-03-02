import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './pages/About';
import Background from './pages/Background';
import Projects from './pages/Projects';
import Highlights from './pages/Highlights';

function App() {
  const [activePage, setActivePage] = useState('about');
  const [showContacts, setShowContacts] = useState(false);

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <main>
      <Sidebar showContacts={showContacts} toggleContacts={toggleContacts} />
      
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        
        <article className={`article ${activePage === 'about' ? 'active' : ''}`}>
          <About />
        </article>
        <article className={`article ${activePage === 'background' ? 'active' : ''}`}>
          <Background />
        </article>
        <article className={`article ${activePage === 'projects' ? 'active' : ''}`}>
          <Projects />
        </article>
        <article className={`article ${activePage === 'highlights' ? 'active' : ''}`}>
          <Highlights />
        </article>
      </div>
    </main>
  );
}

export default App;