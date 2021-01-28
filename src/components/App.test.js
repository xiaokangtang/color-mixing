import React from 'react';
import { render } from '@testing-library/react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router';
import '@testing-library/jest-dom/extend-expect';
import { shallow, mount } from 'enzyme';

import App from './App';

it('renders correctly', () => {
  shallow(<App />);
});

it('renders header', () => {
  const wrapper = mount(<App />);
  const header = <h1>Welcome!</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
test('full app rendering/navigating', async () => {
  const {
    container,
    history: { navigate },
  } = renderWithRouter(<App />);
  const appContainer = container;
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(appContainer.innerHTML).toContain('Welcome!');

  // with reach-router we don't need to simulate a click event, we can just transition
  // to the page using the navigate function returned from the history object.
  await navigate('/game');
  expect(container.innerHTML).toContain('Color Mixing Game');
});
