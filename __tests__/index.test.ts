import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../app/page';

describe('Home component', () => {
  test('renders textarea and submit button', () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    expect(getByPlaceholderText('Enter text...')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  test('shows error message when submitting empty text', async () => {
    const { getByText } = render(<Home />);
    fireEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(getByText('Please enter text')).toBeInTheDocument();
    });
  });
});
