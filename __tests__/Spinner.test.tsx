import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/Spinner/Spinner';

describe('<Button />', () => {
  it('render component', () => {
    render(<Spinner />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
