import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header', () => {
  describe('Logo', () => {
    it('displays on the screen', () => {
      const { queryByTestId } = render(<Header />);

      expect(queryByTestId('test-logo')).toBeInTheDocument();
    });

    it('when clicked, redirects to home', async () => {
      const { queryByTestId } = render(<Header />);

      const mockedFn = jest.fn();
      const logo = queryByTestId('test-logo')!;
      logo.addEventListener('click', mockedFn);

      expect(logo).toHaveProperty('href', window.location.href);
      expect(mockedFn).toHaveBeenCalledTimes(0);

      await userEvent.click(logo);

      expect(mockedFn).toHaveBeenCalledTimes(1);
    });
  });
});
