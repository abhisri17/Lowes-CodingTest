import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

test('renders learn react link', async () => {
  render(<Loader />);
  const linkElement = screen.getByTestId('loader');
  expect(linkElement).toBeInTheDocument();
});
