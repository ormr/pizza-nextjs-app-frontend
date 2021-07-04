import { render, screen } from '@testing-library/react';
import { Nav } from '../components/Nav';
/**
 * @jest-environment jsdom
 */

describe('<Nav />', () => {
  it('render', () => {
    render(<Nav />);
    screen.debug();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
