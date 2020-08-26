import React, { useState, useEffect } from 'react';

const Timer = props => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let interval = null;
    if (props.gameStatus !== 'complete') {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds, props.gameStatus]);

  return (
    props.gameStatus === 'complete' ? (
      <div>
        <p>You used {seconds}s</p>
      </div>
    ) : (
      <div>
        <p>{seconds}</p>
      </div>
    )
  )
}

export default Timer;