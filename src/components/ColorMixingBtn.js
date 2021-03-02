import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

//Component for mixing color btn (options for users to choose from).
const useStyles = createUseStyles({
  mixingBtn: {
    border: [['thin', 'solid', '#ddd']],
    width: 45,
    height: 45,
    margin: 10,
    'font-size': '25px',
    transform: 'scale(1)',
    backgroundColor: (props) => props.colorMixing,
    // outline changes onclick to indicate btn getting clicked
    outline: (props) => props.outline,
    '&:focus': {
      outline: (props) => props.outline,
    },
  },
});

const ColorMixingBtn = (props) => {
  const classes = useStyles(props);
  return (
    <button
      className={classes.mixingBtn}
      onClick={() => props.onClick(props.colorMixing)}></button>
  );
};

ColorMixingBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  colorMixing: PropTypes.string.isRequired,
  outline: PropTypes.string,
};

export default ColorMixingBtn;
