import './css/App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './theme/Navbar';
import Hero from './theme/Hero';
import Features from './theme/Features';
import Reviews from './theme/Reviews';
import Prices from './theme/Prices';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Prices />
    </div>
  );
}

export default App;
