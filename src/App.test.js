import { render, screen } from '@testing-library/react';
import App from './App';



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About/);
  expect(linkElement).toBeInTheDocument();
})

test('render h3 element', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dashboard/);
  expect(linkElement).toBeInTheDocument();
});




test('list should be of length 3', () => {
  render(<App />);
  const listElement =screen.queryByRole("list")
  const listItems = screen.getAllByRole("listitem")
  expect(listElement).toBeInTheDocument();
  expect(listItems.length).toEqual(3)
});
