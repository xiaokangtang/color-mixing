import React from "react";
import { shallow } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Timer from "./Timer";

it("renders correctly", () => {
  shallow(<Timer gameStatus="incomplete"/>);
});

jest.useFakeTimers();
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
it("it should call setinterval twice in 1s", () => {
  act(() => {
    render(<Timer gameStatus="incomplete" />, container);
  });
  // move ahead in time by 1000ms
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(setInterval).toHaveBeenCalledTimes(2);
});

