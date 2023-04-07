import './App.css';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Menu from './component/menu/Menu';
import Rooms from './component/rooms/Rooms';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
        {/* <Login/> */}
        {/* <Rooms/> */}
        <Menu/>
        {/* <Home />   */}
      </GameProvider>
    </div>
  );
}

export default App;
