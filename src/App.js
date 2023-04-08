import './App.css';
import Home from './component/home/Home';
import InsertWord from './component/insertWord/InsertWord';
import Login from './component/login/Login';
import Ranking from './component/ranking/Ranking';
import Rooms from './component/rooms/Rooms';
import Chat from './component/chat/Chat';
import Tip from './component/tip/Tip';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Scanner from './component/scanner/Scanner';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/rooms' element={<Rooms />} />
            <Route path='/home' element={<Home />} />
            <Route path='/insertWord' element={<InsertWord />} />
            <Route path='/tip' element={<Tip />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/scanner' element={<Scanner />} />
          </Routes>
        </Router>
      </GameProvider>
    </div>
  );
}

export default App;
