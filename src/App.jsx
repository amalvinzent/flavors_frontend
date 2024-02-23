import './App.css'
import FlavorDetails from './pages/FlavorDetails'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Suggestor from './pages/Suggestor'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/suggestor" element={<Suggestor />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/:id" element={<FlavorDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
