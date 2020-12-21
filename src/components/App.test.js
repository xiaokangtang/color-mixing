import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";

it("renders correctly", () => {
  shallow(<App />);
});

it("renders header", () => {
  const wrapper = mount(<App />);
  const header = <h1>Color Mixing Game</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

