import './App.css';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Ranking from './component/ranking/Ranking';
import Rooms from './component/rooms/Rooms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import React from 'react';

function App() {
  return (
      <div className="App">
        <GameProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/rooms' element={<Rooms />} />
              <Route path='/home' element={<Home />} />
              <Route path='/ranking' element={<Ranking />} />
            </Routes>
          </Router>
        </GameProvider>
      </div>
  );
}

export default App;
