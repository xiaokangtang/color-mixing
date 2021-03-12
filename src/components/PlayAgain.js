import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  playAgainBtn: {
    border: [['thin', 'solid', '#3b82f6']],
    borderRadius: '15px',
    width: 100,
    height: 60,
    padding: 10,
    transition: 'all 0.5s',
  },
});

const PlayAgain = (props) => {
  const classes = useStyles(props);
  return (
    <div className="mb-10">
      <button className={classes.playAgainBtn} onClick={props.onClick}>
        Play Again
      </button>
    </div>
  );
};

PlayAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayAgain;
