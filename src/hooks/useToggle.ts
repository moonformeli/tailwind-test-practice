import { useState } from 'react';

export const useToggle = (options: string[]) => {
  const [opt1, opt2] = options;
  const [option, setOption] = useState(opt1);

  const toggle = () => {
    if (option === opt1) {
      setOption(opt2);
    } else {
      setOption(opt1);
    }
  };

  return { option, toggle };
};
