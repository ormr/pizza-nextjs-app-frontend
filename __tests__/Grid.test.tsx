import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from '../components/Grid';
import { mockedProducts } from '../__mocks__/mockedProducts';

describe('<Grid />', () => {
  it('render', () => {
    render(<Grid products={mockedProducts} />);
    const cardName = screen.getAllByText(mockedProducts[0].name)[0];
    expect(cardName).toBeInTheDocument();
  });
});
