import './App.css';
import Home from './component/home/Home';
import InsertWord from './component/insertWord/InsertWord';
import Login from './component/login/Login';
import Menu from './component/menu/Menu';
import Ranking from './component/ranking/Ranking';
import Rooms from './component/rooms/Rooms';
import Chat from './component/chat/Chat';
import Tip from './component/tip/Tip';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Router>
          <Routes>
            {/* <Route path='/' element={<Login />} />
            <Route path='/rooms' element={<Rooms />} /> */}
            <Route path='/' element={<Home />} />
            {/* <Route path='/insertWord' element={<InsertWord />} />
            <Route path='/tip' element={<Tip />} />
            <Route path='/ranking' element={<Ranking />} /> */}
          </Routes>
        </Router>
      </GameProvider>
    </div>
  );
}

export default App;
