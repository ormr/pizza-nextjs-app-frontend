import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Alert } from '../components/Alerts';
import { RootState } from '../redux/types';

const props = {
  children: '123',
  index: '1234',
  delay: 3000,
  fade: false,
  onFade: () => {},
};

describe('<Alert />', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('render', () => {
    render(<Alert {...props} />);
    screen.debug();
    // expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});
