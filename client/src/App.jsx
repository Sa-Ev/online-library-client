import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Register from './pages/Register';
import Catalog from './pages/Catalog';

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ padding: "20px", flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;