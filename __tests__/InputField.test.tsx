import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InputField } from '../components/InputField/InputField';

const props = {
  id: 'text',
  type: 'text',
  labelText: 'Введите пароль',
  onChange: () => {},
};

const setUp = (props) => render(<InputField {...props} />);

describe('<InputField />', () => {
  it('render InputField component', () => {
    setUp(props);
    screen.debug();
    expect(screen.getByLabelText(/Введите пароль/i)).toBeInTheDocument();
  });

  it('focus on input', () => {
    const { getByTestId } = render(<InputField {...props} />);
    const input = getByTestId('input');
    userEvent.tab();
    expect(input).toHaveFocus();
  });
});
