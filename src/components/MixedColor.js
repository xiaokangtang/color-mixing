import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
/**
 * Component for mixed color (aka question).
 */
const useStyles = createUseStyles({
  mixedBtn: {
    border: [
      ['thin', 'solid', '#ddd']
    ],
    width: 45,
    height: 45,
    margin: 10,
    transition: 'all 0.5s',
    'font-size': '25px',
    backgroundColor: props => props.mixedColor,
  }
});

const MixedColor = props => {
  const classes = useStyles(props);
  return (
    <div
      className = {classes.mixedBtn}>
    </div>
  )
};

MixedColor.propTypes = {
  /**
   * mixedColor: randomly generated from remaining mixedcolors
   */
  mixedColor: PropTypes.string.isRequired
};

export default MixedColor;