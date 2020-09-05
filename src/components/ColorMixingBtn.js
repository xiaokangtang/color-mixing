import React from 'react';

const ColorMixingBtn = props => {
  return(
    <button
      className={props.selected ? 'colorBtn active' : 'colorBtn'}
      style={{ backgroundColor: props.colorMixing }}
      onClick={() => props.onClick(props.colorMixing)}
    ></button>
  )
};

export default ColorMixingBtn;