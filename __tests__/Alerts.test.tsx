import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { AlertsView } from '../components/Alerts/Alerts';
import { RootState } from '../redux/types';
import { pushAlert } from '../redux/actions';

const mockStoreAlerts = [
  {
    message: 'Добавлено: Овощи и грибы 🌱, 30',
  },
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const props = {
  delay: 3000,
  positionTop: 153,
  positionRight: 164,
};

describe('<Alerts />', () => {
  it('render list of alerts', () => {
    const mockedStore = mockStore({
      alert: {
        stack: mockStoreAlerts,
      },
    }) as MockStoreEnhanced<RootState>;

    for (const alert of mockStoreAlerts) {
      pushAlert(alert.message)(mockedStore.dispatch);
    }

    render(
      <Provider store={mockedStore}>
        <AlertsView {...props} />
      </Provider>
    );
    screen.debug();
    expect(
      screen.getByText('Добавлено: Овощи и грибы 🌱, 30')
    ).toBeInTheDocument();
  });
});
