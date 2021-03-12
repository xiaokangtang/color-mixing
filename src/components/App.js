import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './style.css';
import NavBar from './NavBar';
import Home from './Home';
import Game from './Game';

const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <NavBar />
      <Router>
        <Home path="/" />
        <Game
          path="game"
          key={gameId}
          startNewGame={() => setGameId(gameId + 1)}
        />
      </Router>
    </div>
  );
};

export default App;
