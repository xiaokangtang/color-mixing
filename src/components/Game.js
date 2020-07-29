import React, { useState, useEffect } from 'react';

const colors = {
  'orange': ['red', 'yellow'],
  'grey': ['black', 'white'],
  'purple': ['red', 'blue']
};

const colorsMixedArr = Object.keys(colors);
let colorMixingArr = [];

colorsMixedArr.forEach((key) => {
  colorMixingArr = colorMixingArr.concat(colors[key]);
});
colorMixingArr = Array.from(new Set(colorMixingArr));

const ColorMixingBtn = props => (
  <button
    className="colorBtn"
    style={{ backgroundColor: props.colorMixing }}
  >
    {props.colorMixing}
  </button>
);

const Game = () => {
  return (
    <div className="body">
      <h1>Color Mixing Game</h1>
      <div className="left">

      </div>
      <div className="right">
        {colorMixingArr.map((colorMixing, index) => (
          <ColorMixingBtn
            key={index}
            colorMixing={colorMixing}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;