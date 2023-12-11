import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent, {
  PointerEventsCheckLevel,
} from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Plan from './Plan';
import { plan_month } from '../../mocks';

describe('Plan', () => {
  afterAll(() => {
    cleanup();
  });

  describe('with mouseover', () => {
    it('changes the border color', async () => {
      const plan = plan_month[0];
      const { queryByTestId } = render(<Plan {...plan} />);

      const planContainer = queryByTestId('plan-container');

      expect(planContainer).toBeInTheDocument();

      expect(planContainer).toHaveClass('border-gray-200');

      await userEvent.hover(planContainer!);

      expect(planContainer).toHaveClass('border-indigo-600');
    });
  });
});
