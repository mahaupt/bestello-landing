import './css/App.scss';
import Navbar from './theme/Navbar';
import Hero from './theme/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        Hello World
      </div>
      
    </div>
  );
}

export default App;
