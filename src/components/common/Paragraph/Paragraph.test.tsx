import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Paragraph } from './Paragraph';

describe('Paragraph', () => {
  it('children rendering correctly', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    expect(screen.getByText('Paragraph')).toBeVisible();
  });

  it('size class added correctly', () => {
    render(<Paragraph small>Paragraph</Paragraph>);
    expect(screen.getByText('Paragraph').className).toContain('o-paragraph--small');
  });

  it('size class not added', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    expect(screen.getByText('Paragraph').className).not.toContain('o-paragraph--small');
  });

  it('bold class added correctly', () => {
    render(<Paragraph bold>Paragraph</Paragraph>);
    expect(screen.getByText('Paragraph').className).toContain('o-paragraph--bold');
  });

  it('bold class not added', () => {
    render(<Paragraph>Paragraph</Paragraph>);
    expect(screen.getByText('Paragraph').className).not.toContain('o-paragraph--bold');
  });
});
