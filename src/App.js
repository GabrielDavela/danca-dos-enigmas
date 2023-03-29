import './App.css';
import Home from './component/home/Home';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Home />
      </GameProvider>
    </div>
  );
}

export default App;
