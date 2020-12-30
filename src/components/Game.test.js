import React from "react";
import renderer from 'react-test-renderer';

import Game from "./Game";
import MixedColor from "./MixedColor";
import ColorMixingBtn from "./ColorMixingBtn";

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Game />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is key', () => {
  const prop = {key: 1};
  const game = renderer.create(<Game {...prop}/>).toJSON();
  expect(game).toMatchSnapshot();
});

it('mixedBtn renders correctly when there is color', () => {
  const prop = {color: 'green'};
  const mixed = renderer.create(<MixedColor {...prop}/>).toJSON();
  expect(mixed).toMatchSnapshot();
});

it('mixingBtn renders', () => {
  const prop = {key: 'color-blue', color: 'blue'}
  const mixingBtn = renderer.create(<ColorMixingBtn {...prop}/>).toJSON();
  expect(mixingBtn).toMatchSnapshot();
});