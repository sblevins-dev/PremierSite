import './css/nav.css';
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
