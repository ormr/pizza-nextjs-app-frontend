import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import { ProductModal } from '../components/Product/Product';
import { mockedProducts } from '../__mocks__/mockedProducts';

describe('<ProductModal />', () => {
  it('render component', () => {
    render(
      <ProductModal
        productId="132321"
        product={mockedProducts[0]}
        onCloseModal={() => {}}
      />
    );
    expect(screen.getByAltText(mockedProducts[0].name)).toBeInTheDocument();
  });
});
