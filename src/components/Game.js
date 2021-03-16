import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ColorMixingBtn from './ColorMixingBtn';
import MixedColor from './MixedColor';
import PlayAgain from './PlayAgain';
import Timer from './Timer';
import Instruction from './Instruction';
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
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl px-4 sm:px-6 lg:px-8">
          <span className="block text-indigo-600 xl:inline">
            Color Mixing Game
          </span>
        </h1>
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Timer gameStatus={gameStatus} />
            {gameStatus === STATUSES.incomplete ? (
              <div className="mb-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="flex">
                    <div className="left">
                      <MixedColor mixedColor={mixedColor} />
                    </div>
                  </div>
                  <div className="flex">
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
                </dl>
              </div>
            ) : (
              <PlayAgain onClick={props.startNewGame} />
            )}

            <Instruction
              gameStatus={gameStatus}
              status={status}
              correctNum={correctNum}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

Game.propTypes = {
  startNewGame: PropTypes.func.isRequired,
};

export default Game;
