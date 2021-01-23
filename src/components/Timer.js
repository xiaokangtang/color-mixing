import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import options from './options';

const STATUSES = options.STATUSES;

//Component for showing how much time user has taken.
const Timer = (props) => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let interval = null;
    if (props.gameStatus !== STATUSES.complete) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, props.gameStatus]);

  return props.gameStatus === STATUSES.complete ? (
    // Show user total time if complete
    <div>
      <p>You used {seconds}s</p>
    </div>
  ) : (
    <div>
      <p>{seconds}</p>
    </div>
  );
};

Timer.propTypes = {
  gameStatus: PropTypes.string.isRequired,
};

export default Timer;
