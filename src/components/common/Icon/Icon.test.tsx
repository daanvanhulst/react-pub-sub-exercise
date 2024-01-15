import { render } from '@testing-library/react';
import { Icon } from 'src/components/common/Icon/Icon';
import { describe, expect, it } from 'vitest';

describe('Icon', () => {
  it('Renders correct one', () => {
    const test = render(<Icon name="X" />);
    expect(test).toMatchSnapshot();
  });

  it('Solid is rendering', () => {
    const test = render(<Icon name="X" />);
    expect(test).toMatchSnapshot();
  });
});
