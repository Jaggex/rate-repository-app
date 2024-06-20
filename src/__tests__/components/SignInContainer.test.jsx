import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn((values) => console.log('onSubmit called with:', values));

      render(<SignInContainer onSubmit={onSubmit} />);

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'testuser');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign In'));

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith({
          username: 'testuser',
          password: 'password',
        });
      });
    });
  });
});
