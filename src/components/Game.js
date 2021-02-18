import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import ColorMixingBtn from './ColorMixingBtn';
import MixedColor from './MixedColor';
import PlayAgain from './PlayAgain';
import Timer from './Timer';
import options from './options';

const colors = options.colors;
const colorsMixedArr = options.colorsMixedArr;
const colorMixingArr = options.colorMixingArr;
const pauseDuration = options.pauseDuration;

const STATUSES = options.STATUSES;

// set game on every render
const useGamesetting = () => {
  const [colorsMixed, setColorsMixed] = useState(colorsMixedArr);
  const [correctNum, setCorrectNum] = useState(0);
  const [status, setStatus] = useState(STATUSES.newSet);
  const [chosenColors, setChosenColors] = useState([]);
  const [gameStatus, setGameStatus] = useState(STATUSES.incomplete);
  const [mixedColor, setMixedColor] = useState(
    colorsMixed[Math.floor(Math.random() * colorsMixed.length)]
  );
  const [correctAns, setCorrectAns] = useState(colors[mixedColor]);

  // check result every time two ColorMixingBtn get clicked
  const mixCheck = (chosenColors) => {
    setColorsMixed(colorsMixed.filter((c) => c !== mixedColor)); //update MixedColor
    if (correctAns.sort().join() === chosenColors.sort().join()) {
      setStatus(STATUSES.correct);
      setCorrectNum(correctNum + 1);
    } else {
      setStatus(STATUSES.incorrect);
    }
    if (colorsMixed.length === 1) {
      setTimeout(() => {
        setGameStatus(STATUSES.complete);
      }, pauseDuration);
    } else {
      // if not complete, render new gameset
      setTimeout(() => {
        setChosenColors([]);
        let ind = Math.floor(
          Math.random() * colorsMixed.filter((c) => c !== mixedColor).length
        );
        setColorsMixed(colorsMixed.filter((c) => c !== mixedColor));
        setMixedColor(colorsMixed.filter((c) => c !== mixedColor)[ind]);
        setCorrectAns(colors[colorsMixed.filter((c) => c !== mixedColor)[ind]]);
        setStatus(STATUSES.newSet);
      }, pauseDuration);
    }
  };
  return {
    mixedColor,
    status,
    chosenColors,
    setChosenColors,
    mixCheck,
    gameStatus,
    correctNum,
  };
};

const Game = (props) => {
  const {
    mixedColor,
    status,
    chosenColors,
    setChosenColors,
    mixCheck,
    gameStatus,
    correctNum,
  } = useGamesetting();

  //useSpring for feedback
  const fb = useSpring({
    from: { opacity: status === STATUSES.newSet ? 1 : 0 },
    to: {
      opacity: 1,
      color:
        status === STATUSES.correct
          ? options.correctFb
          : status === STATUSES.incorrect
          ? options.incorrectFb
          : options.defaultFb,
    },
    reset: true,
  });

  //ColorMixingBtn onclick - check if there are 2 chosen colors
  const onBtnClick = (newColor) => {
    setChosenColors([...chosenColors, newColor]);
    if (chosenColors.length >= 1) {
      mixCheck(chosenColors.concat(newColor));
    }
  };

  //check ColorMixingBtn for outline
  const checkBtnStatus = (c) => {
    if (chosenColors.indexOf(c) > -1) {
      return status === STATUSES.correct
        ? options.correctOutline
        : status === STATUSES.incorrect
        ? options.incorrectOutline
        : options.defaultOutline;
    } else {
      return 'none';
    }
  };

  return (
    <div>
      <h1>Color Mixing Game</h1>
      {gameStatus === STATUSES.incomplete ? (
        <div className="body">
          <div className="left">
            <MixedColor mixedColor={mixedColor} />
          </div>
          <div className="right">
            {colorMixingArr.map((colorMixing) => {
              const outline = checkBtnStatus(colorMixing);
              console.log(outline);
              return (
                <ColorMixingBtn
                  key={`color-${colorMixing}`}
                  outline={outline}
                  colorMixing={colorMixing}
                  onClick={onBtnClick}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <PlayAgain onClick={props.startNewGame} />
      )}

      <animated.div style={fb}>
        {gameStatus === STATUSES.complete ? (
          <p>{correctNum} correct</p>
        ) : status === STATUSES.correct ? (
          <p>Correct!</p>
        ) : status === STATUSES.incorrect ? (
          <p>Incorrect!</p>
        ) : (
          <p>Please select</p>
        )}
      </animated.div>
      <Timer gameStatus={gameStatus} />
    </div>
  );
};

Game.propTypes = {
  startNewGame: PropTypes.func.isRequired,
};

export default Game;
