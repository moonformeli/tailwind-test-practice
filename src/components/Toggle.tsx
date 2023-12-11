'use client';

import { twMerge } from 'tailwind-merge';
import { useToggle } from '@/hooks';

export type Option = {
  text: string;
  onClick?: () => void;
};

interface ToggleProps {
  option1: Option;
  option2: Option;
}

const twLabel =
  'block rounded-full px-2.5 py-1 text-xs font-semibold leading-5 text-gray-500 cursor-pointer';
const twSelectedToggle = 'peer-checked:bg-indigo-600 peer-checked:text-white';
const twInput = 'invisible absolute -left-[9999px] -top-[9999px] peer';

export default function Toggle({ option1, option2 }: ToggleProps) {
  const { option, toggle } = useToggle([option1.text, option2.text]);

  const handleClickOption1 = () => {
    toggle();

    option1.onClick?.();
  };

  const handleClickOption2 = () => {
    toggle();

    option2.onClick?.();
  };

  return (
    <div
      style={{ boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px inset' }}
      className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-solid border-gray-200 p-1 leading-5"
    >
      <div role="radiogroup" data-testid="option1-test">
        <input
          className={twInput}
          type="radio"
          id={option1.text}
          value={option1.text}
          name="plan"
          checked={option === option1.text}
          data-testid="option1-input"
          role="radio"
          aria-label="plan"
          onChange={handleClickOption1}
        />
        <label
          className={twMerge(twLabel, twSelectedToggle)}
          htmlFor={option1.text}
          data-testid="option1-radio"
        >
          {option1.text}
        </label>
      </div>
      <div data-testid="option2-test">
        <input
          className={twInput}
          type="radio"
          id={option2.text}
          value={option2.text}
          name="plan"
          checked={option === option2.text}
          data-testid="option2-input"
          role="radio"
          aria-label="plan"
          onChange={handleClickOption2}
        />
        <label
          className={twMerge(twLabel, twSelectedToggle)}
          htmlFor={option2.text}
          data-testid="option2-radio"
        >
          {option2.text}
        </label>
      </div>
    </div>
  );
}
