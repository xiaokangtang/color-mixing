import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import options from './options';

const STATUSES = options.STATUSES;

//Component for showing how much time user has taken.
const Instruction = (props) => {
  const { gameStatus, status, correctNum } = props;
  const { x } = useSpring({
    from: { x: 0 },
    x: status === STATUSES.newSet ? 0 : 1,
    config: { duration: 800 },
    reset: true,
  });

  return (
    <div>
      <animated.div
        style={{
          color:
            gameStatus === STATUSES.complete
              ? options.defaultFb
              : status === STATUSES.correct
              ? options.correctFb
              : status === STATUSES.incorrect
              ? options.incorrectFb
              : options.defaultFb,
          opacity: x.interpolate({ range: [0, 1], output: [0.6, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}>
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
    </div>
  );
};

Instruction.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  correctNum: PropTypes.number,
};

export default Instruction;
