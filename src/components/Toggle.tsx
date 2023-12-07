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

const twToggle =
  'cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold leading-5 text-gray-500';
const twSelectedToggle = 'bg-indigo-600 text-white';

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
      className="inline-flex items-center justify-center gap-1 rounded-full border-[1px] border-solid border-gray-200 p-1 leading-5"
    >
      <div
        className={twMerge(
          twToggle,
          selectedToggle === Toggle_Type.OPTION_1 && twSelectedToggle,
        )}
        data-testid="option1-test"
        onClick={handleClickOption1}
      >
        {option1.text}
      </div>
      <div
        className={twMerge(
          twToggle,
          selectedToggle === Toggle_Type.OPTION_2 && twSelectedToggle,
        )}
        data-testid="option2-test"
        onClick={handleClickOption2}
      >
        {option2.text}
      </div>
    </div>
  );
}
