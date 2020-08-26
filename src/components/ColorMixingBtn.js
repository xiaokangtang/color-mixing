import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  myBtn: {
    border: [
      ['thin', 'solid', '#ddd']
    ],
    width: 45,
    height: 45,
    margin: 10,
    'font-size': '25px',
    backgroundColor: props => props.colorMixing,
  }
});

const ColorMixingBtn = props => {
  const classes = useStyles(props);
  return(
    <button
    className= {classes.myBtn}
    onClick={() => props.onClick(props.colorMixing)}
  >
  </button>
  )
};

export default ColorMixingBtn;