import { render, screen } from '@testing-library/react';
import App from './App';
import Dashboard from './Dashboard';

test('renders learn react link', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
