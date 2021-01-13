import React from "react";
import { shallow, mount } from "enzyme";

import ColorMixingBtn from "./ColorMixingBtn";

it("renders correctly", () => {
  shallow(<ColorMixingBtn colorMixing="green" onClick={()=>{}} />);
});

it("it should return a green color on click", () => {
  // GIVEN
  let testState = '';
  const actualNode = mount(
    <ColorMixingBtn colorMixing="green" onClick={(e) => {
        console.log(e);
        testState = 'green';
      }
    } />
  );
  // WHEN
  actualNode.find('button').simulate('click');
  // THEN
  expect(testState).toEqual('green');
  // expect(wrapper.contains(header)).toEqual(true);
});

it("it should not return a green color on click", () => {
  // GIVEN
  let testState = '';
  const actualNode = mount(
    <ColorMixingBtn colorMixing="green" onClick={(e) => {
        console.log(e);
        testState = 'red';
      }
    } />
  );
  // WHEN
  actualNode.find('button').simulate('click');
  // THEN
  expect(testState).not.toEqual('green');
  // expect(wrapper.contains(header)).toEqual(true);
});
