import { render, screen } from '@testing-library/react';
import { CartButton } from '../components/Button/CartButton';

const props = {
  productCount: 1,
};

const setUp = (props) => render(<CartButton {...props} />);

describe('<CartButton />', () => {
  it('render component', () => {
    setUp(props);
    expect(screen.getByText(props.productCount)).toBeInTheDocument();
  });
});
