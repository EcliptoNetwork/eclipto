import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';

import { Home, About, Initiatives, Research} from './pages';

const App = () => {
  return (
    <main className="bg-black">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/initiatives" element={<Initiatives />} />
                <Route path="/research" element={<Research/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App
