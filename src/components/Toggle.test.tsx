import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Toggle, { type Option } from './Toggle';

describe('Toggle.tsx', () => {
  const options: Option[] = [
    {
      text: 'Monthly',
    },
    {
      text: 'Annually',
    },
  ];

  it('renders on the browser', () => {
    const { queryByTestId } = render(
      <Toggle option1={options[0]} option2={options[1]} />,
    );

    expect(queryByTestId('option1-test')).toBeInTheDocument();
    expect(queryByTestId('option2-test')).toBeInTheDocument();
  });
});
