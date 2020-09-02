import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mixedBtn: {
    border: [
      ['thin', 'solid', '#ddd']
    ],
    width: 45,
    height: 45,
    margin: 10,
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

export default MixedColor;