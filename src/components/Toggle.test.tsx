import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Toggle, { Option } from './Toggle';

describe('Toggle.tsx', () => {
  const options: Option[] = [
    {
      text: 'Monthly',
    },
    {
      text: 'Annually',
    },
  ];

  describe('when change a plan', () => {
    it('shows a selected plan', async () => {
      const option1 = options[0];
      const option2 = options[1];

      const { queryByTestId, queryAllByRole } = render(
        <Toggle option1={option1} option2={option2} />,
      );

      expect(queryByTestId('option1-test')).toBeInTheDocument();
      expect(queryByTestId('option2-test')).toBeInTheDocument();

      const radioButtons = queryAllByRole('radio', { name: 'plan' });

      const monthButton = radioButtons[0];
      const yearButton = radioButtons[1];

      // 처음엔 month 로 선택이 되어 있음
      expect(monthButton).toBeChecked();
      expect(yearButton).not.toBeChecked();

      await userEvent.click(radioButtons[1]);

      // 연간 플랜을 선택 후 year 로 변경 되었음
      expect(monthButton).not.toBeChecked();
      expect(yearButton).toBeChecked();

      await userEvent.click(radioButtons[0]);

      // 다시 월별 플랜을 선택 시 month 로 변경됨
      expect(monthButton).toBeChecked();
      expect(yearButton).not.toBeChecked();
    });
  });
});
