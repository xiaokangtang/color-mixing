import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import './style.css';
import Game from './Game';

const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="game">Game</Link>
    </div>
  );
};

const App = () => {
  const [gameId, setGameId] = useState(1);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="game">Game</Link>
      </nav>
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
  // return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;
