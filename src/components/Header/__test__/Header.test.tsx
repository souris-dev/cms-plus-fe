import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render correctly', () => {
    const headerFragment = render(<Header />).asFragment();
    expect(headerFragment).toMatchSnapshot();
  });
});