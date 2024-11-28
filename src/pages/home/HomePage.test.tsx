import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  test('renders home page with greeting card default UI', () => {
    render(<HomePage />);

    expect(screen.getByText('Gift Card')).toBeInTheDocument();
    expect(screen.getByText('File Upload')).toBeInTheDocument();
    expect(screen.getByText('Dear')).toBeInTheDocument();
    expect(screen.getByText('Message')).toBeInTheDocument();
    expect(screen.getByText('From')).toBeInTheDocument();
  });
});
