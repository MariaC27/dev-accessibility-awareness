
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Suggestions from './pages/Suggestions/Suggestions';
import Examples from './pages/Examples/Examples';
import Resources from './pages/Resources/Resources';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css'


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/editor" element={<Suggestions/>} />
          <Route path="/examples" element={<Examples/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
    </Router>
  );
}

export default App
