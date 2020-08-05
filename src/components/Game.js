import React, { useState, useEffect } from 'react';

const ColorMixingBtn = props => (
  <button
    className="colorBtn"
    style={{ backgroundColor: props.colorMixing }}
    onClick={() => props.onClick(props.colorMixing)}
  >
  </button>
);

const MixedColor = props => (
  <div
    className = 'mixedColor'
    style={{ backgroundColor: props.mixedColor}} 
  >
  </div>
)

const colors = {
  'orange': ['red', 'yellow'],
  'grey': ['black', 'white'],
  'purple': ['red', 'blue'],
  'green': ['yellow', 'blue'],
  'brown': ['red', 'green']
};

const colorsMixedArr = Object.keys(colors);
let colorMixingArr = [];

colorsMixedArr.forEach((key) => {
  colorMixingArr = colorMixingArr.concat(colors[key]);
});
colorMixingArr = Array.from(new Set(colorMixingArr));

const startGame = () => {
  const ind = Math.floor(Math.random() * colorsMixedArr.length);
  const mixedColor = colorsMixedArr[ind];
  const correctAns = colors[mixedColor];
  const [colorLeft, setColorLeft] = useState(mixedColor);
  const [status, setStatus] = useState('');
  const [chosenColors, setChosenColors] = useState([]);

  const mixCheck = (chosenColors) => {
    if (correctAns.sort().join() === chosenColors.sort().join()) {
      const newColorLeft = colorsMixedArr[Math.floor(Math.random() * colorsMixedArr.length)];
      setStatus('correct');
      setChosenColors([]);
      setColorLeft(newColorLeft);
    } else {
      setStatus('incorrect');
    }
  }
  return { mixedColor, status, chosenColors, mixCheck };
}

const Game = () => {
  const {
    mixedColor,
    status,
    chosenColors,
    mixCheck,
  } = startGame();

  const onBtnClick = (chosenColor) => {
    chosenColors.push(chosenColor);
    if (chosenColors.length >= 2) {
      mixCheck(chosenColors);
    }
  }
  return (
    <div>
      <h1>Color Mixing Game</h1>
      <div className="body">
        
        <div className="left">
          <MixedColor mixedColor={mixedColor} />
        </div>
        <div className="right">
          {colorMixingArr.map((colorMixing, index) => (
            <ColorMixingBtn
              key={index}
              colorMixing={colorMixing}
              onClick={onBtnClick}
            />
          ))}
        </div>
      </div>
      <div>
        {status === 'correct'
          ? (<p>Correct!</p>)
          : status === 'incorrect'
            ? (<p>Incorrect!</p>)
            : (<p>Please select</p>)}
      </div>
    </div>
  );
};

export default Game;