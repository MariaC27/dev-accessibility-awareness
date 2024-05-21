
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Suggestions from './pages/Suggestions/Suggestions';
import Explanations from './pages/Explanations/Explanations';
import Resources from './pages/Resources/Resources';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css'
// import Test from './pages/Explanations/Test';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/editor" element={<Suggestions/>} />
          <Route path="/explanations" element={<Explanations/>} />
          <Route path="/resources" element={<Resources/>} />
        </Routes>
    </Router>
  );
}

export default App
