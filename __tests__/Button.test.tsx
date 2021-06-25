import { fireEvent, getByText, render, screen } from '@testing-library/react';
import React from 'react';
import { Button } from '../components/Button/Button';

describe('<Button />', () => {
  it('render component', () => {
    render(
      <Button type="primary" size="medium">
        Button text
      </Button>
    );
    expect(screen.getByText(/Button text/i)).toBeInTheDocument();
  });

  it('click', () => {
    const handleClick = jest.fn();
    render(
      <Button type="primary" size="medium" onClick={handleClick}>
        Button text
      </Button>
    );

    fireEvent.click(screen.getByText(/Button text/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
