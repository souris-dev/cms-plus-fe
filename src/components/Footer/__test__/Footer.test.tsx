import { render } from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {
  it('should render correctly', () => {
    const footerFragment = render(<Footer />).asFragment();
    expect(footerFragment).toMatchSnapshot();
  });
});