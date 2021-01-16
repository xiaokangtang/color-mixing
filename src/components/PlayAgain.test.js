import React from "react";
import { shallow, mount } from "enzyme";

import PlayAgain from "./PlayAgain";

it("renders correctly", () => {
  shallow(<PlayAgain onClick={()=>{}} />);
});

it("renders play again text", () => {
  const wrapper = shallow(<PlayAgain onClick={()=>{}} />);
  const buttonText = 'Play Again';
  expect(wrapper.contains(buttonText)).toEqual(true);
});