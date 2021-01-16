import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = props => (
  <div>
    <button onClick={props.onClick}>Play Again</button>
  </div>
);

PlayAgain.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default PlayAgain;