import logo from './logo.svg';
import './App.css';
import ListMovies from './components/ListMovie';
import Herosection from './components/Herosection';

function App() {
  return (
    <div className="App">
      <Herosection/>
      <ListMovies/>
    </div>
  );
}

export default App;
