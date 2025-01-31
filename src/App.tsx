import { Route, Routes, useLocation } from 'react-router-dom';

import './assets/styles/style.scss'
import NavComponent from './components/Nav/Nav'
import HomeComponent from './pages/Home/Home'
import AboutComponent from './pages/About/About';
import ProjectsComponent from './pages/Projects/Projects';
import NotFoundComponent from './pages/NotFound/NotFound';


function App() {
  const location = useLocation();

  return (
    <>
      <NavComponent />
      <main>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="about" element={<AboutComponent />} />
            <Route path="projects" element={<ProjectsComponent />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
      </main>
    </>
  )
}

export default App
