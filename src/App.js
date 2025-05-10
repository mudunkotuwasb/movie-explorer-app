import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <a href="/">Home</a>
            <a href="/favorites">Favorites</a>
          </nav>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/movie/:id" element={<div>Movie Details Page</div>} />
            <Route path="/favorites" element={<div>Favorites Page</div>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
