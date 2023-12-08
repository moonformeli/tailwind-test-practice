import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type Option = {
  text: string;
  onClick?: () => void;
};

interface ToggleProps {
  option1: Option;
  option2: Option;
}

enum Toggle_Type {
  OPTION_1 = 1,
  OPTION_2,
}

const twLabel =
  'block rounded-full px-2.5 py-1 text-xs font-semibold leading-5 text-gray-500 cursor-pointer';
const twSelectedToggle = 'peer-checked:bg-indigo-600 peer-checked:text-white';
const twInput = 'invisible absolute -left-[9999px] -top-[9999px] peer';

export default function Toggle({ option1, option2 }: ToggleProps) {
  const [selectedToggle, setSelectedToggle] = useState(Toggle_Type.OPTION_1);

  const handleClickOption1 = () => {
    setSelectedToggle(Toggle_Type.OPTION_1);

    option1.onClick?.();
  };

  const handleClickOption2 = () => {
    setSelectedToggle(Toggle_Type.OPTION_2);

    option2.onClick?.();
  };

  return (
    <div
      style={{ boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px inset' }}
      className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-full border-[1px] border-solid border-gray-200 p-1 leading-5"
    >
      <div
        // className={twMerge(
        //   twToggle,
        //   selectedToggle === Toggle_Type.OPTION_1 && twSelectedToggle,
        // )}
        role="radiogroup"
        data-testid="option1-test"
      >
        <input
          className={twInput}
          type="radio"
          id={option1.text}
          value={option1.text}
          name="plan"
          checked={selectedToggle === Toggle_Type.OPTION_1}
          data-testid="option1-input"
          role="radio"
          aria-label="plan"
          onChange={handleClickOption1}
        />
        <label
          // className="cursor-pointer"
          className={twMerge(
            twLabel,
            // selectedToggle === Toggle_Type.OPTION_1 && twSelectedToggle,
            twSelectedToggle,
          )}
          htmlFor={option1.text}
          data-testid="option1-radio"
        >
          {option1.text}
        </label>
      </div>
      <div
        // className={twMerge(
        //   twToggle,
        //   selectedToggle === Toggle_Type.OPTION_2 && twSelectedToggle,
        // )}
        data-testid="option2-test"
      >
        <input
          className={twInput}
          type="radio"
          id={option2.text}
          value={option2.text}
          name="plan"
          checked={selectedToggle === Toggle_Type.OPTION_2}
          data-testid="option2-input"
          role="radio"
          aria-label="plan"
          onChange={handleClickOption2}
        />
        <label
          // className="cursor-pointer"
          className={twMerge(
            twLabel,
            // selectedToggle === Toggle_Type.OPTION_2 && twSelectedToggle,
            twSelectedToggle,
          )}
          htmlFor={option2.text}
          data-testid="option2-radio"
        >
          {option2.text}
        </label>
      </div>
    </div>
  );
}
