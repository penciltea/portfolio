import { Route, Routes } from 'react-router-dom';

import './assets/styles/style.scss'
import NavComponent from './components/Nav/Nav'
import HomeComponent from './pages/Home'
import AboutComponent from './pages/About/About';
import ProjectsComponent from './pages/Projects/Projects';


function App() {
  return (
    <>
      <NavComponent />
      <main>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/projects" element={<ProjectsComponent />} />
          </Routes>
      </main>
    </>
  )
}

export default App
