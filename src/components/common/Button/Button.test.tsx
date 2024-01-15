import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  const content = 'My button';
  const type = 'button';
  const handleClick = vi.fn();

  it('Correct content is rendering', () => {
    render(
      <Button type={type} onClick={handleClick}>
        {content}
      </Button>,
    );
    expect(screen.getByRole('button').textContent).toEqual(content);
  });

  it('Correct tagname is rendering', () => {
    render(
      <Button type={type} onClick={handleClick}>
        {content}
      </Button>,
    );
    expect(screen.getByRole('button').tagName).toEqual('BUTTON');
  });

  it('Clicking the button performs an action', () => {
    render(
      <Button type={type} onClick={handleClick}>
        {content}
      </Button>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
