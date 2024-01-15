import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Heading } from './Heading';

const sizes = ['h1', 'h2', 'h3', 'h4'] as const;

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading size='h1'>Heading</Heading>);
    expect(screen.getByText('Heading')).toBeVisible();
  });

  it.each(sizes)('renders correct size %s', (size) => {
    render(<Heading size={size}>Heading</Heading>);
    const heading = screen.getByText('Heading');
    expect(heading.tagName).toBe(size.toUpperCase());
  });

  it.each(sizes)('adds correct class %s', (size) => {
    render(<Heading size={size}>Heading</Heading>);
    expect(screen.getByText('Heading').className).toContain(
      `o-heading__${size}`
    );
  });

  it.each(sizes)('adds correct as class %s', (size) => {
    render(
      <Heading size={size === 'h1' ? 'h2' : size} as={size}>
        Heading
      </Heading>
    );
    expect(screen.getByText('Heading').className).toContain(
      `o-heading__${size}`
    );
  });
});
