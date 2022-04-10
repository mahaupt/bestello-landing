import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import LandingPage from './pages/LandingPage';
import LegalPage from './pages/LegalPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
