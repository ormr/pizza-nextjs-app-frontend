import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Profile } from '../components/Profile/Profile';

const props = {
  name: 'Lorem',
  surname: 'Ipsum',
  phone: '+11111111111',
  address: 'ул. Lorem, д. 1',
};

describe('<Button />', () => {
  it('render component', () => {
    render(<Profile {...props} />);
    expect(
      screen.getByText(`${props.name} ${props.surname}`)
    ).toBeInTheDocument();
    expect(screen.getByText(props.phone)).toBeInTheDocument();
    expect(screen.getByText(props.address)).toBeInTheDocument();
  });
});
